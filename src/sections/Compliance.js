import React, { useMemo } from 'react'
import styled, { css, up, useDown, x } from '@xstyled/styled-components'

import certificationR7 from 'assets/icons/certification-apsad-r7.inline.svg'
import certificationR5 from 'assets/icons/certification-apsad-r5.inline.svg'
import certificationASHRAE from 'assets/icons/certification-ashrae.inline.svg'
import certificationHDS from 'assets/icons/certification-hds.inline.svg'
import certificationISO50001 from 'assets/icons/certification-iso-50001.inline.svg'
import certificationISO27001 from 'assets/icons/certification-iso-27001.inline.svg'
import certificationTierIII from 'assets/icons/certification-tier-3.inline.svg'
import certificationR4 from 'assets/icons/certification-apsad-r4.inline.svg'

import { useLocale } from 'contexts'

import {
  AnimatedOnScroll,
  Carousel,
  Content,
  Heading,
  Svg,
  Text,
  VisuallyHidden,
  Wrapper,
} from 'components'

import { slugify } from 'helpers'

const certifications = [
  {
    alt: 'ISO 27001:2013',
    src: certificationISO27001,
  },
  {
    alt: 'HDS',
    src: certificationHDS,
  },
  {
    alt: 'ISO 50001:2018',
    src: certificationISO50001,
  },
  {
    alt: 'Tier III',
    src: certificationTierIII,
  },
  {
    alt: 'ASHRAE TC9.9',
    src: certificationASHRAE,
  },
  {
    alt: 'APSAD R7',
    src: certificationR7,
  },
  {
    alt: 'APSAD R4',
    src: certificationR4,
  },
  {
    alt: 'APSAD R5',
    src: certificationR5,
  },
]

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 8,
  },
  largeMobile: {
    breakpoint: { max: 767, min: 470 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 469, min: 0 },
    items: 2,
  },

  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 8,
  },
}

export function Compliance() {
  const { gettext } = useLocale()
  const downLg = useDown('lg')
  const downMd = useDown('md')
  const ref = React.useRef()

  const splittedCertifications = useMemo(
    () =>
      certifications.reduce((acc, currentValue, currentIndex, array) => {
        if (currentIndex % 2 === 0) {
          acc.push(array.slice(currentIndex, currentIndex + 2))
        }

        return acc
      }, []),
    [],
  )

  const stackedLogos = useMemo(
    () =>
      splittedCertifications.map((values, index) => (
        <x.div key={index}>
          <Logo {...values[0]} />
          <Logo {...values[1]} />
        </x.div>
      )),
    [splittedCertifications],
  )

  const oneLinerLogos = useMemo(
    () =>
      certifications.map((certification, index) => (
        <Logo key={index} {...certification} />
      )),
    [],
  )

  const anchorCompliance = useMemo(
    () => slugify(gettext('anchor.compliance')),
    [gettext],
  )

  return (
    <Wrapper>
      <x.hr id={anchorCompliance} position="absolute" mt={-90} />
      <Content py={{ _: 10, lg: 136, md: 104 }} pb={20}>
        <Heading size="big" textAlign="center">
          {gettext('compliance.title')}
        </Heading>
        <AnimatedOnScroll ref={ref}>
          <Text pb={16}>{gettext('compliance.description')}</Text>
        </AnimatedOnScroll>
        <VisuallyHidden className="print">
          <ul>
            {certifications.map(({ alt }, index) => (
              <li key={index}>{alt}</li>
            ))}
          </ul>
        </VisuallyHidden>
        <CarouselWrapper>
          <Carousel
            showDots={downMd}
            buttonGroup={false}
            responsive={responsive}
            draggable={false}
          >
            {downMd ? oneLinerLogos : downLg ? stackedLogos : oneLinerLogos}
          </Carousel>
        </CarouselWrapper>
      </Content>
    </Wrapper>
  )
}

function Logo({ src, alt }) {
  return (
    <Svg
      asset={src}
      title={alt}
      width="104px"
      height="80px"
      color="transparent"
      viewBox="0 0 106 84"
      srOnly={false}
      mb={6}
    />
  )
}

const CarouselWrapper = styled(x.div)`
  .react-multi-carousel-item {
    display: flex;
    justify-content: center;
    margin-right: unset;
  }

  ${up(
    'md',
    css`
      .react-multi-carousel-item {
        margin-right: 6;
      }
    `,
  )}

  ${up(
    'lg',
    css`
      .react-multi-carousel-item {
        margin-right: unset;
      }
    `,
  )}
`
