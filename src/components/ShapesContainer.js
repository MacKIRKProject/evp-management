import React from 'react'
import styled, { css, up, useTh, x } from '@xstyled/styled-components'

export function ShapesContainer({
  clipPaths,
  shapesHeight,
  children,
  ...props
}) {
  return (
    <>
      <Shapes clipPaths={clipPaths} h={shapesHeight} />
      <x.div position="relative" zIndex={1} {...props}>
        {children}
      </x.div>
    </>
  )
}

const Paths = styled(x.div)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;

  > div {
    width: 100%;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
  }
`

function Shapes({ clipPaths = [], ...props }) {
  const lava = useTh('colors.lava-gradient')

  return (
    <Paths aria-hidden="true" {...props}>
      {clipPaths.map((path, index) => (
        <x.div css={path} $lava={lava} key={index} />
      ))}
    </Paths>
  )
}

export const shapesGradient = css`
  ${({ $lava }) => `
    background: ${$lava};
  `}
  ${up('lg', `background-image: url('animated-gradient.svg');`)}
`
