import { getColor, style } from '@xstyled/styled-components'

export const outlineOffset = style({
  prop: 'outlineOffset',
})

export const outlineColor = style({
  prop: 'outlineColor',
  themeGet: getColor,
  css: color => ({
    outlineColor: `${color} !important`,
  }),
})
