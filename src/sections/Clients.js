import React, { useEffect, useMemo, useState } from 'react'

import styled, {
  css,
  up,
  useDown,
  useScreens,
  x,
} from '@xstyled/styled-components'
import {
  AnimatedOnScroll,
  Carousel,
  Content,
  GradientBar,
  Heading,
  Link,
  Svg,
  Text,
  VisuallyHidden,
  Wrapper,
} from 'components'

import theme from 'theme'
import { useLocale } from 'contexts'

import { slugify } from 'helpers'

import Fedora from 'assets/logo-fedora.png'
import ArchLinux from 'assets/logo-archlinux.png'
import BBButton from 'assets/logo-bigbluebutton.png'
import ESXi from 'assets/logo-esxi.png'
import FreeBSD from 'assets/logo-freebsd.png'
import Linux from 'assets/logo-linux.png'
import Debian from 'assets/logo-debian.png'
import CentOS from 'assets/logo-centos.png'
import Guy1 from 'assets/guy1.png'
import Guy2 from 'assets/guy2.png'
import More from 'assets/icons/arrow-link.inline.svg'

const clients = [
  {
    alt: 'Debian',
    link: 'https://www.debian.org/',
    src: Debian,
  },
  {
    alt: 'CentOS',
    link: 'https://www.centos.org/',
    src: CentOS,
  },
  {
    alt: 'Fedora',
    link: 'https://getfedora.org/',
    src: Fedora,
  },
  {
    alt: 'ArchLinux',
    link: 'https://archlinux.org/',
    src: ArchLinux,
  },
  {
    alt: 'BBButton',
    link: 'https://bigbluebutton.org/',
    src: BBButton,
  },
  {
    alt: 'ESXi',
    link: 'https://www.vmware.com/fr/products/vsphere-hypervisor.html',
    src: ESXi,
  },
  {
    alt: 'FreeBSD',
    link: 'https://www.freebsd.org/',
    src: FreeBSD,
  },
  {
    alt: 'Linux',
    link: 'https://www.linux.org/',
    src: Linux,
  },
]

export function Clients() {
  const { gettext } = useLocale()

  const testimonials = [
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      cta: {
        link: 'https://www.google.fr/search?q=Guy1',
        text: gettext('client.read'),
      },
      image: {
        alt: 'Guy',
        src: Guy1,
      },
      title: gettext('client.believe'),
    },
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      cta: {
        link: 'https://www.google.fr/search?q=Guy2',
        text: gettext('client.read'),
      },
      image: {
        alt: 'Guy',
        src: Guy2,
      },
      title: gettext('client.hds'),
    },
  ]

  const anchorClients = useMemo(
    () => slugify(gettext('anchor.clients')),
    [gettext],
  )

  return (
    <Wrapper id={anchorClients}>
      <Content
        position="relative"
        px={{ _: 4, md: 10 }}
        mb={{ _: 0, lg: 7, md: 7 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth={1124}
      >
        <VisuallyHidden className="print">
          <ul>
            {clients.map(({ alt }, index) => (
              <li key={index}>{alt}</li>
            ))}
          </ul>
        </VisuallyHidden>
        <Heading
          size="big"
          textAlign="center"
          mb={{ _: 6, lg: 16, md: 9 }}
          mt={{ _: 10, lg: 28, md: 24 }}
        >
          {gettext('client.our')}
        </Heading>
        <CarouselContainer clients={clients} />
        <GradientBar
          w={{ _: 56, lg: 'full', md: '42rem' }}
          mt={{ _: 10, lg: '8.5rem', md: 24 }}
          mb={{ _: 10, lg: '8.5rem', md: 24 }}
        />
        <TestimonialsContainer testimonials={testimonials} />
      </Content>
    </Wrapper>
  )
}

const Image = styled.img`
  height: 7.25rem;
  width: 7.25rem;
`

const CardCarousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15.5rem;
`

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 4,
  },
}

function checkClientsLength(innerWidth, lg, clients) {
  return innerWidth >= lg && clients.length < 10
    ? [...clients, ...clients]
    : clients
}

const CarouselContainer = ({ clients }) => {
  const breakpoints = useScreens()
  const downLg = useDown('lg')
  const [slides, setSlides] = useState(clients)

  useEffect(() => {
    const handleResize = () =>
      setSlides(checkClientsLength(window.innerWidth, breakpoints.lg, clients))
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [clients, breakpoints.lg])

  useEffect(() => {
    if (!downLg) {
      setSlides(checkClientsLength(window.innerWidth, breakpoints.lg, clients))
    }
  }, [clients, breakpoints.lg, downLg])

  return (
    <x.div maxWidth={864} m="auto" w="full" h={{ _: 304, lg: 248 }}>
      <Carousel showDots={downLg} buttonGroup={!downLg} responsive={responsive}>
        {slides
          .reduce((acc, currentValue, currentIndex, array) => {
            if (currentIndex % 2 === 0)
              acc.push(array.slice(currentIndex, currentIndex + 2))

            return acc
          }, [])
          .map(([topClient = {}, bottomClient = {}], index) => (
            <CardCarousel key={index}>
              <CardLink {...topClient} />
              {bottomClient && <CardLink {...bottomClient} />}
            </CardCarousel>
          ))}
      </Carousel>
    </x.div>
  )
}

function CardLink({ link, src, alt }) {
  return (
    <Link href={link || ''} rel="noopener">
      <Image src={src || ''} alt={alt || ''} />
    </Link>
  )
}

const ClientPicture = styled.img`
  max-width: 18rem;
  max-height: 11.5rem;
  object-position: top;
  object-fit: cover;
  border-radius: lg;
  ${up(
    'md',
    css`
      min-height: 13.5rem;
      max-width: 19rem;
      margin-right: 12;
    `,
  )}
  ${up(
    'lg',
    css`
      min-width: 21rem;
      margin-bottom: 8;
      margin-right: 0;
    `,
  )}
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${up(
    'md',
    css`
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 10;
    `,
  )}
  ${up(
    'lg',
    css`
      align-items: flex-start;
      margin-bottom: 0;
      margin-left: 20;
      min-width: 21rem;
      :nth-child(even) {
        flex-direction: column;
      }
      :nth-child(odd) {
        flex-direction: column-reverse;
      }
    `,
  )}
`

const ReadMore = styled(Link)`
  display: flex;
  align-items: center;
  width: 32;
  margin-top: 6;
  margin-bottom: 12;
  font-weight: semibold;
  font-size: default;
  color: ${theme.colors.primary};
  svg {
    margin-left: 2;
    transition: transform 0.2s ease-out;
  }
  &:hover,
  &:focus {
    text-decoration: none;
    svg {
      transform: scale3d(1.2, 1.2, 1);
    }
  }
  ${up(
    'md',
    css`
      margin-bottom: 0;
    `,
  )}
  ${up(
    'lg',
    css`
      margin-bottom: 10;
    `,
  )}
`

const TestimonialsContainer = ({ testimonials }) => {
  const { gettext } = useLocale()
  const refs = []
  refs[0] = React.useRef()
  refs[1] = React.useRef()

  return (
    <x.div display="flex" flexDirection={{ _: 'column', lg: 'row' }}>
      <Heading as="h3" size="normal" textAlign="left" mb={{ _: 10, md: 20 }}>
        {gettext('client.say')}
      </Heading>
      {testimonials.map(({ content, cta, image, title }, index) => (
        <AnimatedOnScroll ref={refs[index]} key={index}>
          <Card>
            <ClientPicture src={image && image.src} alt={image && image.alt} />
            <x.div>
              <Heading as="h4" size="small" mt={{ _: 6, md: 0 }}>
                {title}
              </Heading>
              <Text
                fontWeight="normal"
                fontSize="default"
                lineHeight={6}
                maxHeight="7.5rem"
                overflow="hidden"
              >
                {content}
              </Text>
              <ReadMore
                href={cta.link}
                rel="noopener"
                className="breakout-link"
              >
                {cta.text}
                <Svg
                  asset={More}
                  width="15px"
                  height="15px"
                  color="transparent"
                  viewBox="0 0 14 15"
                />
              </ReadMore>
            </x.div>
          </Card>
        </AnimatedOnScroll>
      ))}
    </x.div>
  )
}
