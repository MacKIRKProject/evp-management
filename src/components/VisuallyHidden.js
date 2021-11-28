import React from 'react'

import styled, { x } from '@xstyled/styled-components'

const Container = styled(x.div)`
  position: absolute !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
`

export function VisuallyHidden({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}
