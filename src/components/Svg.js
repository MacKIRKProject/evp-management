import React from 'react'

import { x } from '@xstyled/styled-components'

export function Svg({
  color = 'brand',
  size = 6,
  width = null,
  height = null,
  viewBox = null,
  asset = null,
  srOnly = true,
  title = '',
  ...props
}) {
  const w = width || size
  const h = height || size

  if (!asset || typeof asset !== 'function') return null

  const { type = '', props: { children: svgChildren = null } = {} } =
    React.cloneElement(asset()) || {}

  if (type !== 'svg') return null

  return (
    <x.svg
      aria-hidden={srOnly}
      focusable={!srOnly}
      preserveAspectRatio="none"
      minWidth={w}
      minHeight={h}
      maxWidth={w}
      maxHeight={h}
      viewBox={viewBox || `0 0 24 24`}
      fill={color}
      {...props}
    >
      {title && <title>{title}</title>}
      {svgChildren}
    </x.svg>
  )
}
