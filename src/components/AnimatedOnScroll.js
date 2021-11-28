import React from 'react'
import { useUp, x } from '@xstyled/styled-components'

export const AnimatedOnScroll = React.forwardRef(
  ({ children, ...props }, ref) => {
    const upLg = useUp('lg')

    React.useEffect(() => {
      if (ref?.current && upLg) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              ref.current?.classList.add('fadein-animation', `fadein-totop`)
            }
          },
          { threshold: 0.6 },
        )
        observer.observe(ref.current)
      }
    }, [ref, upLg])

    // To apply style on first frame
    React.useLayoutEffect(() => {
      if (ref?.current && upLg) {
        ref.current.style.opacity = 0
      }
    }, [ref, upLg])

    return (
      <x.div {...props} ref={upLg ? ref : null}>
        {children}
      </x.div>
    )
  },
)
