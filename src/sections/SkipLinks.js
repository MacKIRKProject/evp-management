import React from 'react'
import styled, { x } from '@xstyled/styled-components'

import { Link } from 'components'

export function SkipLinks() {
  return (
    <x.div position="relative" className="print-hidden">
      <Skip href="#main" target="_self">
        Main content
      </Skip>
      <Skip href="#footer" target="_self">
        Footer
      </Skip>
    </x.div>
  )
}

const Skip = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: sm;
  padding: 1;
  transform: translate3d(-100%, -100%, 0);
  z-index: 1000;
  &:focus {
    color: secondary;
    transform: translate3d(0, 0, 0);
  }
`
