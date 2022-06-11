import React from 'react'
import { Link as IntlLink } from 'gatsby-plugin-intl'
import { x } from '@xstyled/styled-components'

export function Link({ to = '', href = '', ...props }) {
  if (href) {
    return <x.a href={href} {...props} />
  }

  return <x.a as={href} to={to} {...props} />
}
