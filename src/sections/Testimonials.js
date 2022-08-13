import { Area, Container, Grid, MainTitle, x } from '@components'
import styled, { css } from '@xstyled/styled-components'
import Strategy from '@assets/icons/strategy.inline.svg'
import Quote from '@assets/icons/quote.inline.svg'
import { DynamicArea } from '@components/DynamicArea'
import { Svg } from '@components/Svg'

const data = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    job: 'Graphic director',
    logo: Strategy,
    name: 'Toto Le Marchang',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    job: 'Graphic director',
    logo: Strategy,
    name: 'Toto Le Marchang',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    job: 'Graphic director',
    logo: Strategy,
    name: 'Toto Le Marchang',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    job: 'graphic director',
    logo: Strategy,
    name: 'toto',
  },
]

export function Testimonials() {
  return (
    <ContainerStyled h="fit-content" mt={8}>
      <Grid pb={16} borderRadius="20px" gap={0}>
        <Area position="relative" mt={8}>
          <MainTitle title="Vos avis" id="testimonials" />
        </Area>
        {data.map((item, index) => (
          <Card {...item} index={index} />
        ))}
      </Grid>
    </ContainerStyled>
  )
}

const columns = {
  lg: {
    1: 1,
    2: 2,
    3: 2,
    4: 2,
    default: 2,
  },
}
const Card = ({ content, job, logo, name, index }) => {
  return (
    <DynamicArea
      h="fit-content"
      w={{ lg: 'fill-available' }}
      borderRadius="20px"
      columns={columns}
      index={index}
      boxShadow="classic"
      size={data.length}
      m="auto"
      ml={{ _: 4, sm: index % 2 === 0 ? 8 : 4 }}
      mr={{ _: 4, sm: index % 2 === 0 ? 4 : 8 }}
      mb={{ _: 4, sm: 8 }}
    >
      <x.div
        display="flex"
        alignItems={{ _: 'flex-start', sm: 'center' }}
        flexDirection={{ _: 'column', lg: 'row' }}
        pt={{ _: 4, lg: 0 }}
      >
        <Svg
          asset={logo}
          viewBox="0 0 450 511.99"
          stroke="vertAntoineClair"
          strokeWidth="15px"
          fill="transparent"
          size={{ _: 75, lg: 100 }}
          pl={4}
          mt={{ lg: -16 }}
          ml={{ _: 8, sm: 0 }}
        />
        <Content pl={4} pb={{ _: 4, lg: 6 }} pt={{ lg: 8 }}>
          <SvgStyled
            asset={Quote}
            viewBox="-10 -10 120 120"
            fill="vertAntoine"
            transform="scale(-1,1)"
            size={{ _: 7, lg: 7 }}
            ml="-3px"
          />
          <x.p color="vertAntoine" mt={2}>
            <x.span fontWeight="700" color="vertAntoine">
              {name}
            </x.span>{' '}
            - <x.span opacity="0.75">{job}</x.span>
          </x.p>
          <x.p color="dark" fontStyle="italic" fontWeight="300" mt={2} pr={4}>
            {content}
          </x.p>
          <SvgStyled
            asset={Quote}
            viewBox="-10 -10 120 120"
            fill="vertAntoine"
            size={{ _: 7, lg: 7 }}
            ml="auto"
            mr="18px"
          />
        </Content>
      </x.div>
    </DynamicArea>
  )
}

const Content = styled(x.div)`
  &:before {
    content: '';
  }
`

const SvgStyled = styled(Svg)`
  filter: drop-shadow(0px 0px 1px #118796);
`
const ContainerStyled = styled(Container)`
  box-shadow: 0 0 32px -32px #10444b;
  border-radius: 20px;
`
