import React from 'react'
import styled, { useTh, x } from '@xstyled/styled-components'

export function GradientBar(props) {
  const gradient = useTh('colors.background-gradient')

  return <Bar $gradient={gradient} w={336} {...props} />
}

const Bar = styled(x.hr)`
  height: 8px;
  background: ${p => p.$gradient};
`
