import * as React from 'react'
import { Preflight, ThemeProvider, x } from '@xstyled/styled-components'
import theme from 'theme'

import * as sections from 'sections'

import GlobalStyle from 'GlobalStyle'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <sections.Head title="EVP Management" description="head.description" />
      <sections.Header />
      <x.main id="main">
        <sections.Scope />
        <sections.Competence />
        <sections.Reference />
        <sections.AboutUs />
      </x.main>
      <sections.Footer />
    </ThemeProvider>
  )
}
