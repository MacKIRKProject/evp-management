import * as React from 'react'
import { Preflight, ThemeProvider, x } from '@xstyled/styled-components'
import { LocaleProvider, useLocale } from 'contexts'
import theme from 'theme'

import * as sections from 'sections'
import GlobalStyle from 'GlobalStyle'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <sections.Head title="head.title" description="head.description" />
      <sections.Header />
      <x.main id="main" bg="background">
        toto
      </x.main>
      <sections.Footer />
    </ThemeProvider>
  )
}
