import React from 'react'
import { css, up, x } from '@xstyled/styled-components'
import {
  Content,
  EmailButton,
  Heading,
  PhoneButton,
  ShapesContainer,
  Wrapper,
  shapesGradient,
} from 'components'

import { useLocale } from 'contexts'

import layer from 'assets/contact.png'

const clipPaths = [
  css`
    display: none;
    ${shapesGradient}
    clip-path: polygon(0 35%, 0 100%, 80% 100%);
    ${up('sm', 'display: block')};
  `,
]

export function Contact({ props }) {
  const { gettext } = useLocale()

  return (
    <Wrapper bg="primary" overflow="hidden" {...props}>
      <x.img
        zIndex={1}
        position="absolute"
        top={0}
        left={{ _: '50%', lg: 0 }}
        transform={{ _: 'translateX(-50%)', lg: 'translateX(0)' }}
        src={layer}
        height="264"
        alt=""
        aria-hidden="true"
      />
      <ShapesContainer clipPaths={clipPaths} shapesHeight={304}>
        <Content
          display="flex"
          flexDirection={{ _: 'column', sm: 'row' }}
          px={{ _: 4, sm: 8 }}
          pt={{ _: 8, sm: 16 }}
          pb={{ _: 6, sm: 16 }}
        >
          <Heading
            isDark
            mb={{ _: 4, sm: 0 }}
            flex={1}
            dangerouslySetInnerHTML={{ __html: gettext('contact.title') }}
          />
          <x.div
            display="flex"
            flexDirection="column"
            alignItems={{ _: 'flex-start', sm: 'flex-end' }}
          >
            <PhoneButton tel={gettext('contact.phone.href')} mb={6}>
              {gettext('contact.phone.label')}
            </PhoneButton>
            <EmailButton mailto={gettext('contact.email.href')}>
              {gettext('contact.email.label')}
            </EmailButton>
          </x.div>
        </Content>
      </ShapesContainer>
    </Wrapper>
  )
}
