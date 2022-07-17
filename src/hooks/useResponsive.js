import { useEffect, useState } from 'react'
import { useScreens, useViewportWidth } from '@xstyled/styled-components'

export function useResponsive(
  initialValue = {
    desktop: false,
    tablet: false,
    mobile: true,
  },
) {
  const viewportWidth = useViewportWidth()
  const screens = useScreens()
  const [isDesktop, setIsDesktop] = useState(initialValue.desktop)
  const [isTablet, setIsTablet] = useState(initialValue.tablet)
  const [isMobile, setIsMobile] = useState(initialValue.mobile)

  useEffect(() => {
    setIsDesktop(viewportWidth >= screens.lg)
    setIsTablet(viewportWidth >= screens.sm && viewportWidth < screens.lg)
    setIsMobile(viewportWidth >= screens.xs && viewportWidth < screens.sm)
  }, [viewportWidth, screens])

  return [isDesktop, isTablet, isMobile]
}
