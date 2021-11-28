import React from 'react'
import { x } from '@xstyled/styled-components'

import { useLocale } from 'contexts'
import { EmailButton, PhoneButton } from 'components'

export function Reach({ hasText = false, ...props }) {
  const { gettext } = useLocale()

  return (
    <x.div display="flex" flexDirection={hasText ? 'column' : 'row'} {...props}>
      <PhoneButton
        tel={gettext('contact.phone.href')}
        isIcon={!hasText}
        mt={hasText && { _: 8, md: 'unset' }}
        mb={hasText && { _: 4, md: 8 }}
        mr={!hasText && 2}
      >
        {gettext('contact.phone.label')}
      </PhoneButton>
      <EmailButton
        mailto={gettext('contact.email.href')}
        isIcon={!hasText}
        alignSelf={{ _: 'unset', md: 'end' }}
      >
        {gettext('contact.email.label')}
      </EmailButton>
    </x.div>
  )
}
