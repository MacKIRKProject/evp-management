import React from 'react'
import { createGlobalStyle, css, up } from '@xstyled/styled-components'

const Styled = createGlobalStyle`
  html,
  body {
    -webkit-tap-highlight-color: transparent;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    background-color: white;
    ${up(
      'lg',
      css`
        scroll-behavior: smooth;
      `,
    )}
  }

  body {
    background-color: back;
    color: primary;
    font-family: epilogue;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *, ::before, ::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }

  summary:focus,
  input:focus,
  select:focus,
  textarea:focus,
  button:focus,
  a:focus,
  [tabindex="0"]:focus {
    outline-width: max(1px, 0.08em);
    outline-style: dotted;
    outline-color: currentColor;
    outline-offset: 0.25rem;
  } 

  @supports selector(:focus-visible) {
    &:focus,
    &:active {
      outline: none;
    }

    summary:focus-visible,
    input:focus-visible,
    select:focus-visible,
    textarea:focus-visible,
    button:focus-visible,
    a:focus-visible,
    [tabindex="0"]:focus-visible {
      outline-width: max(1px, 0.08em);
      outline-style: dotted;
      outline-color: currentColor;
      outline-offset: 0.25em;
    }
  }

  a {
    font-size: 1em;
    text-underline-offset: 1.5px;
  }
  
  a {
    > svg {
      transform: scale3d(1, 1, 1) rotate(0);
      transition: transform .1s ease-out;
      --hoversvg: scale3d(1.1, 1.1, 1);
    }
  }

  .breakout-link::before {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  @keyframes fadein-totop {
    0% { opacity: 0; transform: translate3d(0, 4rem, 0); }
    60% { opacity: 1; }
    100% { opacity: 1; transform: translate3d(0, 0, 0); }
  }

  .fadein-animation {
    animation-delay: 440ms;
    will-change: opacity, transform;
  }
  .fadein-totop {
    animation: fadein-totop 720ms cubic-bezier(0.6, 0.97, 0.72, 0.92) forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *, ::before, ::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }


  @media print {
    @page {
        margin: 1cm;
    }
    *,
    *:before,
    *:after,
    *:first-letter,
    p:first-line,
    div:first-line,
    li:first-line {
        background: transparent !important;
        color: #000000 !important;
        box-shadow: none !important;
        text-shadow: none !important;
    }

    *,
    html,
    body {
      font-family: serif !important;
      font-size: 12pt !important;
      color: #000000 !important;
      background-color: #ffffff !important;
    }

    html {
      scroll-behavior: auto;
    }
    *, ::before, ::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }

    header,                                                        
    section,
    article,
    div,
    p,
    h1,
    h2,
    h3,
    h4 {
      height: auto !important;
      width: auto !important;
      max-width: unset !important;
      text-align: left !important;
      display: block !important;
      padding: 1mm !important;
      margin: 1mm !important;
    }

    a[href^="https"]:after {
      content: " (" attr(href) ")"; 
      text-decoration: underline !important;
    }
    a[href^="mailto"]:after, a[href^="tel"]:after, a[href$=".pdf"]:after {
      content: " : "attr(href)""; 
      text-decoration: none !important;
    }
    
    p {
        orphans: 3; 
        widows: 3;
    }

    ul,
    p,
    h1,
    h2, 
    h3, 
    h4, {
      page-break-before: avoid; 
      page-break-after: avoid; 
    }

    nav ul,
    main svg,
    footer,
    img,
    hr,
    .print-hidden,
    [aria-hidden="true"],
    .parallax-outer {
      display: none !important;
    }
    header {
      div,
      p {
        position: relative !important;
        top: unset !important;
        left: unset !important;
        right: unset !important;
        bottom: unset !important;
        height: auto !important;
        width: auto !important;
        clip-path: unset !important;
        margin: 0 !important;
        padding: 0 !important;
        line-height: 1.3;
      }
    }
    nav {
      position: relative !important;
      display: block;
      div:first-of-type a svg {
        fill: #000000 !important;
        width: 300pt !important;
        height: auto !important;
        max-height: unset !important;
        min-height: unset !important;
        max-width: unset !important;
        min-width: unset !important;
      }
      a[href^="mailto"], a[href^="tel"] {
        display: inline !important;
        div {
          display: inline !important;
        }
        svg {
          display: none !important;
        }
      }
    }

    div {
      opacity: 1 !important;
    }
    
    #key-figures {
      div,
      div > span {
        font-size: 18pt !important;
      }
      p {
        font-size: 14pt !important;
      }
    }
    h1 {
      font-size: 18pt !important;
    }
    h2 {
      font-size: 16pt !important;
    }
    h3 {
      font-size: 15pt !important;
      span {
        font-size: 18pt !important;
      }
    }
    h4 {
      font-size: 14pt !important;
      em,
      span {
        font-size: 18pt !important;
      }
    }

    #compliance,
    #clients {
      .react-multi-carousel-list {
        display: none !important;
      }
    }

    .print {
      height: auto !important;
      width: auto !important;
      overflow: initial !important;
      clip: unset !important;
      position: relative !important;
      ul {
        display: block !important;
      }
    }
  }

`

export default function GlobalStyle() {
  return <Styled />
}
