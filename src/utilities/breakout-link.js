import { style } from '@xstyled/styled-components'

export const breakoutLink = style({
  css: () => ({
    '&::before': {
      content: '""',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: 0,
    },
  }),
  prop: 'breakoutLink',
})
