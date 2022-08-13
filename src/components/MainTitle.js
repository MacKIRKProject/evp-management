import React from 'react'
import styled, { x } from '@xstyled/styled-components'

export function MainTitle({ title, ...props }) {
  return (
    <Title
      fontSize={{ _: '32px', lg: '48px', sm: '40px' }}
      color="vertAntoine"
      mb={8}
      textAlign="center"
      {...props}
    >
      {title}
    </Title>
  )
}

const Title = styled(x.h2)`
  position: relative;

  &:before {
    content: '';
    display: block;
    position: relative;
    width: 0;
    height: 2em;
    margin-top: -2em;
  }
`
