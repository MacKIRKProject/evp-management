import React from 'react'
import styled, { css, up, useTh, x } from '@xstyled/styled-components'

export function Heading({
  as = 'h2',
  size = 'normal',
  isDark = false,
  children,
  ...props
}) {
  const secondary = useTh('colors.secondary')
  const primary = useTh('colors.primary')
  const color = isDark ? secondary : primary

  return (
    <Component as={as} $size={size} $color={color} {...props}>
      {children}
    </Component>
  )
}

const Component = styled(x.div)`
  font-family: poppins;
  font-weight: bold;
  ${({ $color, $size }) => css`
    color: ${$color};
    ${sizes[$size]}
  `}
`
const sizes = {
  big: css`
    font-size: 3xl;
    line-height: tight;
    ${up(
      'md',
      css`
        font-size: 6xl;
      `,
    )}
    ${up(
      'lg',
      css`
        font-size: 7xl;
      `,
    )}
  `,
  large: css`
    font-size: 3xl;
    line-height: tight;
    ${up(
      'sm',
      css`
        font-size: 4xl;
      `,
    )}
    ${up(
      'md',
      css`
        font-size: 6xl;
      `,
    )}
    ${up(
      'lg',
      css`
        font-size: 7xl;
      `,
    )}
  `,
  normal: css`
    font-size: 3xl;
    line-height: tight;
    ${up(
      'md',
      css`
        font-size: 4xl;
      `,
    )}
    ${up(
      'lg',
      css`
        font-size: 5xl;
      `,
    )}
  `,
  small: css`
    font-size: 2xl;
    line-height: tight;
    ${up(
      'md',
      css`
        font-size: 3xl;
        line-height: snug;
      `,
    )}
  `,
  thin: css`
    font-size: 2xl;
    line-height: snug;
  `,
  tiny: css`
    font-size: 1xl;
    line-height: snug;
    ${up(
      'sm',
      css`
        font-size: 2xl;
      `,
    )}
  `,
}
