import { Preflight, ThemeProvider } from '@xstyled/styled-components'
import { PageContextProvider } from '@contexts'
import { x } from '@components'
import theme from '@theme'
import GlobalStyle from '@GlobalStyle'

import * as sections from 'sections'

export function Default({ pageContext, children }) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <Preflight />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <sections.Head />
        <sections.Header />
        <x.main id="main">{children}</x.main>
        <sections.Footer />
      </ThemeProvider>
    </PageContextProvider>
  )
}
