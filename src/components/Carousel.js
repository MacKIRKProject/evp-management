import React, { useEffect, useState } from 'react'
import styled from '@xstyled/styled-components'
import loadable from '@loadable/component'
import { useLocale } from 'contexts'
import theme from 'theme'
import { Svg, VisuallyHidden } from 'components'
import Chevron from 'assets/icons/arrow.inline.svg'

import 'react-multi-carousel/lib/styles.css'

export const Container = styled.div`
  position: relative;

  .react-multi-carousel-dot-list {
    position: relative;
    margin: auto;
    margin-top: 8;
    height: fit-content;
    width: 40;
    z-index: 10;
    display: flex;
    justify-content: space-between;
  }
  .react-multi-carousel-track {
    margin: auto;
    align-items: center;
  }
  .react-multi-carousel-item {
    display: flex;
    justify-content: center;
  }
  .react-multi-carousel-list {
    z-index: 10;
  }
`

export const DotStyled = styled.button`
  padding: 2 1;
  width: 6;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  outline-offset: -0.3rem !important;
  > div {
    position: relative;
    margin: auto;
    width: 2;
    height: 2;
    border-radius: lg;
    border: ${theme.colors['primary-400']} 1px solid;
    ::before {
      content: '';
      width: 2;
      height: 2;
      position: absolute;
      top: -1px;
      left: -1px;
      border-radius: inherit;
      background-color: ${p =>
        p.isActive ? theme.colors.tertiary : theme.colors.transparent};
      transition: background-color 0.1s ease-out, opacity 0.1s linear;
    }
  }
  :hover,
  :focus {
    > div {
      border: ${theme.colors.primary} 1px solid;
      transition: border-color 0.1s ease-out;
    }
  }
`
export const ArrowStyled = styled.button`
  cursor: pointer;
  width: 4.5rem;
  height: 4.5rem;
`
const ArrowContainer = styled.div`
  height: full;
  width: full;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .react-multiple-carousel__arrow {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    &--left {
      left: -5rem;
      &:hover,
      &:focus {
        > svg > path {
          stroke: ${theme.colors.primary};
          transition: stroke 0.3s ease-out;
        }
      }
    }
    &--right {
      right: -5rem;
      &:hover,
      &:focus {
        > svg > path {
          stroke: ${theme.colors.primary};
          transition: stroke 0.3s ease-out;
        }
      }
    }
    &:before {
      content: none;
    }
    &:hover,
    &:focus {
      background-color: transparent;
    }
  }
`
function Dots({ onClick, len, index, active }) {
  return (
    <DotStyled onClick={onClick} isActive={active}>
      {
        Array.from({ length: len }, (value, key) => (
          <div key={key}>
            <VisuallyHidden>Slide {key + 1}</VisuallyHidden>
          </div>
        ))[index]
      }
    </DotStyled>
  )
}

function Arrow({ onClick, direction }) {
  const { gettext } = useLocale()

  return (
    <ArrowStyled
      onClick={onClick}
      aria-label={`${gettext('action.go')} ${gettext(
        `action.go.${direction}`,
      )}`}
      className={`react-multiple-carousel__arrow react-multiple-carousel__arrow--${direction}`}
    >
      <Svg
        asset={Chevron}
        transform={`rotate(${direction === 'right' ? 180 : 0}deg)`}
        width={5}
        height={10}
        color="transparent"
        viewBox="0 0 20 40"
      />
    </ArrowStyled>
  )
}

function ButtonGroup({ next, previous }) {
  return (
    <ArrowContainer position="absolute">
      {['left', 'right'].map(direction => (
        <Arrow
          key={direction}
          onClick={direction === 'left' ? previous : next}
          direction={direction}
        />
      ))}
    </ArrowContainer>
  )
}

const defaultResponsive = {
  all: {
    breakpoint: { max: 5000, min: 0 },
    items: 1,
  },
}

export const Carousel = ({
  children,
  showDots = true,
  buttonGroup = true,
  responsive = defaultResponsive,
  ...props
}) => {
  const [Component, setComponent] = useState(false)
  const len = React.Children.count(children || {}) || 0
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const carousel = loadable(() => import('react-multi-carousel'))
      setComponent(carousel)
    }
  }, [])

  return (
    <Container>
      {Component && (
        <Component
          arrows={false} // arrow will be buttonGroup instead
          renderButtonGroupOutside
          customButtonGroup={buttonGroup && <ButtonGroup />}
          showDots={showDots}
          infinite
          draggable={false}
          renderDotsOutside
          responsive={responsive}
          customDot={<Dots len={len} />}
          {...props}
        >
          {children}
        </Component>
      )}
    </Container>
  )
}
