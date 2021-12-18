import * as React from 'react'
import { Preflight, ThemeProvider, x } from '@xstyled/styled-components'
import { LocaleProvider, useLocale } from 'contexts'
import theme from 'theme'

import * as sections from 'sections'
import ErrorBoundary from 'components/ErrorBoundary'
import GlobalStyle from 'GlobalStyle'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider>
        <Localized />
      </LocaleProvider>
    </ThemeProvider>
  )
}

function Localized() {
  const { gettext } = useLocale()

  return (
    <>
      <Preflight />
      <GlobalStyle />
      <ErrorBoundary>
        <sections.Head
          title={gettext('head.title')}
          description={gettext('head.description')}
        />
        <sections.SkipLinks />
        <sections.Header />
        <x.main id="main" bg="background">
       toto
        </x.main>
        <sections.Footer />
      </ErrorBoundary>
    </>
  )
}
