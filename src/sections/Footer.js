import React from 'react'
import styled, { css, up, x } from '@xstyled/styled-components'
import { useLocale } from 'contexts'
import { Hrefs } from 'sections/Header/Menu'
import {
  Content,
  Heading,
  Link,
  Reach,
  ShapesContainer,
  Svg,
  Wrapper,
  shapesGradient,
} from 'components'

import Logo from 'assets/logoEcriture.inline.svg'
import facebook from 'assets/facebook.inline.svg'
import insta from 'assets/insta.inline.svg'

export function Footer() {
  const { gettext } = useLocale()

  return (
    <Wrapper
      as="footer"
      id="footer"
      bg="beigeClair"
      color="secondary"
      paddingTop="5px"
    >
      <Content>
        <x.div display="flex" flexDirection={{ _: 'column', lg: 'row' }} py={5}>
          <Link to="/" textDecoration="none" h="12rem" margin='auto'>
            <Svg
              asset={Logo}
              viewBox="0 0 20688 22444"
              height="100%"
              width={{_:'unset', lg:'100%'}}
              color="secondary"
              srOnly={false}
              title="Scaleway Datacenter"
            />
          </Link>
          <x.div
            display="flex"
            flex="1"
            flexDirection={{ _: 'column', md: 'row' }}
            mt={{ _: 10, lg: 'unset' }}
          >
            <List flex="1" mt={-1} pl={{ _: 'unset', lg: 28 }}>
              <Hrefs />
            </List>
            <List flex="1" mt={-1}>
              <x.div display="flex" justifyContent="left">
                <Link to="/" textDecoration="none">
                  <Svg
                    asset={facebook}
                    width={{ _: 50, md: 50 }}
                    height={50}
                    viewBox="0 0 24 24"
                    color="marronSombre"
                    srOnly={false}
                    title="Scaleway Datacenter"
                  />
                </Link>
                <Link to="/" textDecoration="none" ml={5}>
                  <Svg
                    asset={insta}
                    width={{ _: 50, md: 50 }}
                    height={50}
                    viewBox="0 0 24 24"
                    color="marronSombre"
                    srOnly={false}
                    title="Scaleway Datacenter"
                  />
                </Link>
              </x.div>
              <li>
                <Link
                  href={`https://goo.gl/maps/rrPdqgQ3DZsBnUUZ9`}
                >
                  {gettext('footer.adress.text')}
                </Link>
              </li>

              <li>
                <Link
                  href={`https://www.scaleway.com${gettext(
                    'footer.link.legal.url',
                  )}`}
                >
                  {gettext('footer.link.legal')}
                </Link>
              </li>
              <li>
                <em>
                  &copy; {new Date().getFullYear()}{' '}
                  {gettext('footer.copyright')}
                </em>
              </li>
            </List>
          </x.div>
        </x.div>
      </Content>
    </Wrapper>
  )
}

const List = styled(x.ul)`
  a {
    display: block;
    em {
      padding: 0;
    }
    &:link {
      color: marronSombre;
      text-decoration: none;
    }
    &:visited {
      color: marronSombre;
    }
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  li {
    max-width: 60;
    padding: 2 0;
  }
  em {
    display: block;
    padding: 2 0;
    color: marronSombre;
    span {
      text-decoration: underline;
    }
  }
`
