import React from 'react'
import styled, { css, up, useDown, useUp, x } from '@xstyled/styled-components'

import { StaticImage } from 'gatsby-plugin-image'
import theme from 'theme'

import {
  Content,
  Heading,
  Text,
  Wrapper,
} from 'components'
import { useLocale } from 'contexts'
import { Menu } from './Menu'


export function Header() {
  const { gettext } = useLocale()

  return (
    <Wrapper as="header" id="header" bg="white" color="white" h={1720}>
      <Menu />
      <Content as="div" position="relative" pt={{ _: 28, lg: 44, md: 36 }}>
        <Heading
          isDark
          as="h1"
          size="large"
          dangerouslySetInnerHTML={{
            __html: gettext('header.title'),
          }}
        />
        <Heading
          as="p"
          isDark
          size="tiny"
          maxWidth={776}
          pt={{ _: 8, lg: 12, md: 8 }}
          dangerouslySetInnerHTML={{
            __html: gettext('header.subtitle'),
          }}
        />
      </Content>
    </Wrapper>
  )
}

