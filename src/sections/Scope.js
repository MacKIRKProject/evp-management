import React from 'react'
import { Area, Container, Grid, MainTitle, Svg, x } from '@components'
import styled, { css } from '@xstyled/styled-components'
import Strategy from '@assets/icons/strategy.inline.svg'

export function Scope() {
  return (
    <Container h="fit-content" id="scope" border="1px solid red">
      <Grid>
        <Area position="relative" mt={8}>
          <MainTitle title="Notre périmètre" />
        </Area>

        <Area position="relative" mt={8} mx="auto">
          <Card direction="top" />
          <Card direction="left" mt="-31px" ml="150px" />
          <Card direction="left" mt="-31px" ml="300px" />
        </Area>
      </Grid>
    </Container>
  )
}
const Card = ({ direction = 'top', size = 150, ...props }) => {
  return (
    <x.div display="flex" {...props}>
      <SvgContainer $direction={direction} $size={size} mt={4}>
        <Svg
          asset={Strategy}
          viewBox="0 0 450 511.99"
          width={`${size}px`}
          height={`${size}px`}
          stroke="vertAntoineClair"
          strokeWidth="15px"
          fill="transparent"
          top="0"
          borderRadius="50%"
          borderWidth={`${size / 10}px`}
          borderColor="vertAntoine"
        />
      </SvgContainer>
      <x.div ml={4} pt={6}>
        <x.h3 fontSize="23px" fontWeight="600">
          Strategie
        </x.h3>
        <x.ul pl={2} mt={2}>
          <x.li fontSize="16px">- Things Things Things Things Things</x.li>
          <x.li fontSize="16px">- Things Things Things Things Things</x.li>
          <x.li fontSize="16px">- Things Things Things Things Things</x.li>
          <x.li fontSize="16px">- Things Things Things Things Things</x.li>
        </x.ul>
      </x.div>
    </x.div>
  )
}

const SvgContainer = styled(x.div)`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    ${({ $direction, $size }) => css`
      top: ${$direction === 'top' ? `-${$size / 2}px` : '0'};
      left: ${$direction === 'top' ? '0' : `-${$size / 2}px`};
      width: ${$direction === 'top' ? `${$size / 10}px` : `${$size}px`};
      height: ${$direction === 'top' ? `${$size}px` : `${$size / 10}px`};
    `}
    background-color: vertAntoine;
  }
`
