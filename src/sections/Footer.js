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

import Logo from 'assets/logo-scaleway.inline.svg'

const clipPaths = [
  css`
    ${shapesGradient}
    clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
    ${up('md', `clip-path: polygon(0 0, 100% 40%, 100% 100%, 0 100%)`)};
  `,
  css`
    background-color: primary;
    clip-path: polygon(0 7%, 100% 27%, 100% 100%, 0 100%);
    ${up('md', `clip-path: polygon(0 16%, 100% 56%, 100% 100%, 0 100%)`)};
  `,
  css`
    background-color: primary;
    clip-path: polygon(0 30%, 100% 15%, 100% 100%, 0 100%);
    ${up('md', `clip-path: polygon(0 56%, 100% 16%, 100% 100%, 0 100%)`)};
  `,
]

export function Footer() {
  const { gettext } = useLocale()

  return (
    <Wrapper as="footer" id="footer" bg="background" color="secondary">
      <ShapesContainer
        pt={{ _: 320, md: 500 }}
        clipPaths={clipPaths}
        shapesHeight={{ _: 1208, md: 1079 }}
      >
        <Content>
          <x.div display="flex" flexDirection={{ _: 'column', md: 'row' }}>
            <Heading
              size="normal"
              maxWidth={{ lg: 'unset', md: 400 }}
              isDark
              dangerouslySetInnerHTML={{ __html: gettext('contact.title') }}
            />
            <Reach hasText ml={{ _: 'unset', md: 'auto' }} />
          </x.div>
          <x.hr
            border="default"
            borderColor="secondary"
            mt={{ _: 16, md: 24 }}
            mb={8}
          />
          <x.div display="flex" flexDirection={{ _: 'column', lg: 'row' }}>
            <Link to="/" textDecoration="none" h={7}>
              <Svg
                asset={Logo}
                width={247}
                viewBox="0 0 247 24"
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
                <li>
                  <Link
                    href={`https://www.scaleway.com${gettext(
                      'footer.link.privacy.url',
                    )}`}
                  >
                    {gettext('footer.link.privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`https://www.scaleway.com${gettext(
                      'footer.link.terms.url',
                    )}`}
                  >
                    {gettext('footer.link.terms')}
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
                  <Link href="https://www.scaleway.com">
                    <em
                      dangerouslySetInnerHTML={{
                        __html: gettext('footer.link.discover'),
                      }}
                    />
                  </Link>
                </li>
                <li>
                  <em>
                    &copy; {new Date().getFullYear()}{' '}
                    {gettext('footer.copyright')}
                  </em>
                </li>
              </List>
              <Reach mt={{ _: 10, md: 'unset' }} />
            </x.div>
          </x.div>
        </Content>
      </ShapesContainer>
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
      color: secondary;
      text-decoration: none;
    }
    &:visited {
      color: secondary-300;
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
    span {
      text-decoration: underline;
    }
  }
`
