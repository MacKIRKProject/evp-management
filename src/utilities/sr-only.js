import { style } from '@xstyled/styled-components'

export const srOnly = style({
  css: () => ({
    border: '0 !important',
    clip: 'rect(0, 0, 0, 0) !important',
    height: '1px !important',
    overflow: 'hidden !important',
    padding: '0 !important',
    position: 'absolute !important',
    width: '1px !important',
  }),
  prop: 'srOnly',
})
