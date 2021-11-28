import React, { useMemo } from 'react'
import styled, { between, css, up, useUp, x } from '@xstyled/styled-components'
import { useLocale } from 'contexts'
import {
  AnimatedOnScroll,
  Carousel,
  Content,
  Heading,
  Link,
  ShapesContainer,
  Svg,
  Text,
  Wrapper,
  shapesGradient,
} from 'components'

import { slugify } from 'helpers'

import DCTech from 'assets/dc-technicien.jpg'
import ArrowIcon from 'assets/icons/arrow-link.inline.svg'

export function Solutions() {
  const { gettext } = useLocale()
  const upMd = useUp('md')
  const ref = React.useRef()

  const anchorSolutions = useMemo(
    () => slugify(gettext('anchor.solutions')),
    [gettext],
  )
  const anchorEnvironmental = useMemo(
    () => slugify(gettext('anchor.environmental')),
    [gettext],
  )
  const anchorDocumentation = useMemo(
    () => slugify(gettext('anchor.documentation')),
    [gettext],
  )

  return (
    <Wrapper id={anchorSolutions} bg="background">
      <ShapesContainer
        clipPaths={clipPaths}
        pt={{ _: 10, lg: 32, md: 24 }}
        shapesHeight={1}
      >
        <Content>
          <x.div
            display="flex"
            flexDirection={{ _: 'column', lg: 'row' }}
            alignItems={{ _: 'left', lg: 'unset', md: 'center' }}
          >
            <Heading
              textAlign={{ _: 'left' }}
              size="big"
              maxWidth={{ lg: 496 }}
              w={{ md: '43rem' }}
            >
              {gettext('solutions.h2')}
            </Heading>
            <Columns m={{ lg: 'auto' }}>
              <WhatFor />
            </Columns>
          </x.div>
          <x.hr id={anchorDocumentation} position="absolute" mt={130} />
          <x.div color="secondary" mt={{ _: 288, lg: 272, md: 264 }}>
            <Heading
              as="h3"
              size="small"
              isDark
              maxWidth={{ lg: 496 }}
              pr={{ lg: 0, md: 16 }}
              mb={{ lg: 28, md: 20 }}
            >
              {gettext('solutions.dc.h3')}
            </Heading>
            {upMd ? (
              <Grid>
                {DatacentersContent(gettext)}
                <x.div
                  display={{ _: 'none', lg: 'block' }}
                  gridArea="1 / 3 / 2 / 4"
                  aria-hidden="true"
                >
                  <x.img src={DCTech} alt="" borderRadius="lg" maxWidth={336} />
                </x.div>
              </Grid>
            ) : (
              <StyledCarousel
                responsive={{
                  mobile: {
                    breakpoint: { max: 767, min: 0 },
                    items: 1,
                  },
                }}
                buttonGroup={false}
                draggable={false}
              >
                {DatacentersContent(gettext).map(datacenter => datacenter)}
              </StyledCarousel>
            )}
          </x.div>
          <hr id={anchorEnvironmental} />
          <x.div
            display="flex"
            flexDirection={{ _: 'column', lg: 'row' }}
            pb={{ _: 10, lg: 40, md: 24 }}
            mt={{ _: 264, lg: 272, md: 352 }}
          >
            <Heading isDark as="h3" size="big" maxWidth={{ lg: 424 }}>
              {gettext('solutions.green.h3')}
            </Heading>

            <AnimatedOnScroll
              ref={ref}
              display="flex"
              flexDirection="column"
              mx="auto"
            >
              <Text color="secondary" mt="auto" maxWidth={{ lg: 424 }}>
                {gettext('solutions.green.text')}
              </Text>
            </AnimatedOnScroll>
          </x.div>
        </Content>
      </ShapesContainer>
    </Wrapper>
  )
}

const datacenters = ['dc2', 'dc3', 'dc4', 'dc5']
const filenames = [
  'scaleway-dc2.pdf',
  'scaleway-dc3.pdf',
  'scaleway-dc4.pdf',
  'scaleway-dc5.pdf',
]
function DatacentersContent(gettext) {
  const refs = []
  refs[0] = React.useRef()
  refs[1] = React.useRef()
  refs[2] = React.useRef()
  refs[3] = React.useRef()

  return [...Array(4)].map((_, index) => (
    <AnimatedOnScroll ref={refs[index]} maxWidth={400} key={index}>
      <DCTitle
        maxWidth={56}
        dangerouslySetInnerHTML={{
          __html: gettext(`solutions.${datacenters[index]}.h4`),
        }}
      />
      <Text maxWidth={{ lg: 60 }} my={4}>
        {gettext(`solutions.${datacenters[index]}.text`)}
      </Text>
      <Pdf
        className="print-hidden"
        href={`/pdf/${filenames[index]}`}
        hreflang="en"
        download
        type="application/pdf"
      >
        {gettext('solutions.link.download')}
      </Pdf>
    </AnimatedOnScroll>
  ))
}

function Pdf({ href = '', children, ...props }) {
  return (
    <x.div display="flex" flexWrap="wrap" alignItems="center">
      <PdfLink
        href={href}
        fontWeight="semibold"
        display="flex"
        alignItems="center"
        color="secondary"
        textDecoration={{ focus: 'none', hover: 'none' }}
        h={10}
        {...props}
      >
        <span>{children}</span>
        <x.small color="gray-300" ml={2}>
          (PDF, ≈ 1MB)
        </x.small>
        <Svg
          asset={ArrowIcon}
          width="14px"
          height="15px"
          viewBox="0 0 14 15"
          color="transparent"
          ml={2}
        />
      </PdfLink>
    </x.div>
  )
}

const PdfLink = styled(Link)`
  svg {
    transition: transform 0.2s ease-out;
  }
  text-decoration: none;
  span {
    text-decoration: underline;
  }
  small {
    text-decoration: none;
  }

  &:hover,
  &:focus {
    svg {
      transform: scale3d(1.2, 1.2, 1);
    }
    span {
      text-decoration: none;
    }
  }
`

const DCTitle = styled(({ ...props }) => (
  <Heading isDark as="h4" size="thin" {...props} />
))`
  em {
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 7xl;
    font-style: initial;
    span {
      color: tertiary;
    }
  }
`

function WhatFor() {
  const { gettext } = useLocale()
  const refs = []
  refs[0] = React.useRef()
  refs[1] = React.useRef()
  refs[2] = React.useRef()

  return [...Array(3)].map((_, index) => (
    <AnimatedOnScroll ref={refs[index]} maxWidth="21rem" key={index}>
      <Heading as="h3" size="small" pt={{ _: 10, md: 8 }}>
        {gettext(`solutions.whatfor${index}.h3`)}
      </Heading>
      <Text>{gettext(`solutions.whatfor${index}.text`)}</Text>
    </AnimatedOnScroll>
  ))
}

const Columns = styled(x.div)`
  ${between(
    'md',
    'lg',
    css`
      margin-top: 1.5rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem 1rem;
      div:nth-of-type(3) {
        grid-column: 2/3;
      }
    `,
  )}
  ${up(
    'lg',
    css`
      div:first-of-type h3 {
        padding-top: 4;
      }
    `,
  )}
`
const StyledCarousel = styled(Carousel)`
  .react-multi-carousel-item {
    justify-content: flex-start;
  }
`
const Grid = styled.article`
  display: none;
  ${up(
    'md',
    css`
      display: grid;
      gap: 6;
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    `,
  )}
  ${up(
    'lg',
    css`
      grid-template: repeat(2, 1fr) / repeat(3, 1fr);
      div:nth-of-type(3) {
        grid-area: 2 / 2 / 3 / 3;
      }
      div:nth-of-type(4) {
        grid-area: 2 / 3 / 3 / 4;
      }
    `,
  )}
`

const clipPaths = [
  css`
    ${shapesGradient}
    clip-path: polygon(100% 35%,0 47%,100% 54%);
    ${up('md', `clip-path: polygon(100% 26%,0 37%, 100% 54%)`)};
    ${up('lg', `clip-path: polygon(100% 27%,0 36%,100% 50%)`)};
  `,
  css`
    ${shapesGradient}
    clip-path: polygon(0 80%,100% 70%,100% 100%,0% 100%);
    ${up('md', `clip-path: polygon(0 81%,100% 72%,100% 100%,0% 100%)`)};
    ${up('lg', `clip-path: polygon(0 80%,100% 72%,100% 100%,0% 100%)`)};
  `,
  css`
    background-color: primary;
    clip-path: polygon(0 37%, 100% 46%, 100% 83%, 0 73%);
    ${up('md', `clip-path: polygon(0 25%,100% 33%,100% 81%,0 73%)`)};
    ${up('lg', `clip-path: polygon(0 25%,100% 34%,100% 83%,0 71%)`)};
  `,
]
