import React from 'react'
import styled, { css, useTh, x } from '@xstyled/styled-components'

import EmailIcon from 'assets/icons/email.inline.svg'
import PhoneIcon from 'assets/icons/phone.inline.svg'

import { Link, Svg, VisuallyHidden } from 'components'

import { uniqueId } from 'helpers'

export function Button({ color = 'secondary', ...props }) {
  return (
    <Link
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      fontSize={{ _: 'default', md: '2xl' }}
      fontWeight="600"
      border="default"
      borderRadius="4xl"
      borderColor={color}
      color={{ _: color, active: color, visited: color }}
      textDecoration="none"
      background={{
        _: 'transparent',
        focus:
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%)',
        hover:
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%)',
      }}
      h={{ _: 10, md: 14 }}
      w="fit-content"
      px={{ _: 4, md: 6 }}
      {...props}
    />
  )
}

const Gradient = styled(Button)`
  ${({ $gradient, $tertiary }) => css`
    background: ${$gradient};
    &:hover {
      background: ${$tertiary};
    }
  `}
`

export function EmailButton({ isIcon = false, mailto, children, ...props }) {
  const id = uniqueId('mailto-')

  return isIcon ? (
    <Link
      href={`mailto:${mailto}`}
      title={children}
      aria-labelledby={id}
      w={{ _: 8, md: 10 }}
      h={{ _: 8, md: 10 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="background"
    >
      <HoverIcon asset={EmailIcon} size={{ _: 6, md: 8 }} />
      <VisuallyHidden id={id}>{children}</VisuallyHidden>
    </Link>
  ) : (
    <Button href={`mailto:${mailto}`} title={children} {...props}>
      <Icon asset={EmailIcon} size={{ _: 6, md: 7 }} />
      <x.span ml={1}>{children}</x.span>
    </Button>
  )
}

export function PhoneButton({ isIcon = false, tel, children, ...props }) {
  const id = uniqueId('tel-')
  const gradient = useTh('colors.button-gradient')
  const tertiary = useTh('colors.tertiary')

  return isIcon ? (
    <Link
      href={`tel:${tel}`}
      title={children}
      aria-labelledby={id}
      w={{ _: 8, md: 10 }}
      h={{ _: 8, md: 10 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="full"
      bg="marronSombre"
      {...props}
    >
      <HoverIcon asset={PhoneIcon} size={{ _: 6, md: 8 }} />
      <VisuallyHidden id={id}>{children}</VisuallyHidden>
    </Link>
  ) : (
    <Gradient
      $gradient={gradient}
      $tertiary={tertiary}
      href={`tel:${tel}`}
      border={0}
      color="secondary"
      {...props}
    >
      <Icon asset={PhoneIcon} size={{ _: 6, md: 7 }} />
      <x.span ml={1}>{children}</x.span>
    </Gradient>
  )
}

function Icon({ asset = {}, ...props }) {
  return (
    <Svg
      asset={asset}
      size={6}
      viewBox="0 0 32 32"
      color="transparent"
      {...props}
    />
  )
}

const HoverIcon = styled(Icon)`
  &:hover,
  &:focus {
    transform: var(--hoversvg);
  }
`
