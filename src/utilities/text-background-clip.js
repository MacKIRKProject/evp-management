import { style } from '@xstyled/styled-components'

export const textBackgroundClip = style({
  css: () => ({
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  }),
  prop: 'textBackgroundClip',
})
