import React, { useCallback, useContext, useMemo } from 'react'
import { useIntl } from 'gatsby-plugin-intl'

export const defaultValue = {
  gettext: id => id,
}

const LocaleContext = React.createContext(defaultValue)
export const LocaleProvider = ({ children }) => {
  const intl = useIntl()
  const gettext = useCallback(id => intl.formatHTMLMessage({ id }), [intl])

  const value = useMemo(() => ({ gettext }), [gettext])

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
export default LocaleContext
