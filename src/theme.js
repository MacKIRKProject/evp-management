import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans' // 400 normal
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css' // 700 bold
import '@fontsource/open-sans/800.css' // 700 bold

import {
  defaultTheme,
  generateHexAlphaVariants,
} from '@xstyled/styled-components'

const colors = {
  background: '#ffffff',
  brand: '#4f0599',
  dark: '#0f111a',
  'gray-300': '#d4d4d8',
  'gray-800': '#27272a',
  orangeAntoine: '#DB723A',
  secondary: '#ffffff',
  'secondary-100': '#f4f4f5',
  'secondary-300': '#d4d4d8',
  tertiary: '#e10019',
  vertAntoine: '#10444B',
  vertAntoineClair: '#118796',
  // back: 'white',
  back: '#db723a08',
}

const states = {
  ...defaultTheme.states,
  targetSvg: '& > svg',
  targetSvgPath: '& > svg > path',
  firstChildAncestor: '& > :first-child',
  lastChildAncestor: '& > :last-child',
  beforeLastChild: '&:nth-last-child(2)',
  hoverFocusTargetSvg: '&:hover > svg, &:focus > svg',
  disabledTargetSvg: '&:disabled svg, &[aria-disabled=true] svg',
  hackLinkState: '',
  hoverfocus: '&:hover, &:focus',
  focuswithin: '&:focus-within',
}

const screens = {
  ...defaultTheme.screens,
  grid: 1040,
}

const colorWithAlpha = {
  ...generateHexAlphaVariants(
    {
      primary: '#0f111a',
    },
    [90],
  ),
}

/* eslint sort-keys: ["error", "asc", {natural: false}] */
/* eslint-env es6 */
const fonts = {
  ...defaultTheme.fonts,
  epilogue:
    'Epilogue, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
}

const fontSizes = {
  ...defaultTheme.fontSizes,
  '1xl': '1rem',
  '3xl': '2rem',
  '4xl': '2.5rem',
  '6xl': '4rem',
}

const shadows = {
  ...defaultTheme.shadows,
  'blur-secondary': `0 0 6px 0 ${colors.primary}`,
}

const transforms = {
  'rotate-0': 'rotate(0)',
  'rotate-180': 'rotate(-180deg)',
  'translate-0': 'translate3d(0, 0, 0)',
  'translate-100': 'translate3d(-100%, 0, 0)',
}

const transitions = {
  ...defaultTheme.transitions,
  'transform-ease-in': 'transform .24s ease-in',
  'transform-ease-out': 'transform .46s ease-out',
}

const radii = {
  ...defaultTheme.radii,
  '4xl': '2rem',
}

const theme = {
  ...defaultTheme,
  colors: { ...colors, ...colorWithAlpha },
  fontSizes,
  fonts,
  radii,
  screens,
  shadows,
  states,
  transforms,
  transitions,
}

// eslint-disable-next-line no-console
if (process.env.NODE_ENV === 'development') console.log(theme)

export default theme
