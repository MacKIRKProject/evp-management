import React, { useMemo } from 'react'
import { useCountUp } from 'react-countup'
import styled, { x } from '@xstyled/styled-components'
import star from 'assets/icons/star.inline.svg'
import padlock from 'assets/icons/padlock.inline.svg'
import globe from 'assets/icons/globe.inline.svg'
import { useLocale } from 'contexts'

import {
  AnimatedOnScroll,
  Content,
  GradientBar,
  Heading,
  Svg,
  Text,
  Wrapper,
} from 'components'

import { slugify } from 'helpers'

export function KeyFigures() {
  const { gettext } = useLocale()
  const ref = []
  ref[0] = React.useRef()
  ref[1] = React.useRef()
  ref[2] = React.useRef()
  ref[3] = React.useRef()
  ref[4] = React.useRef()
  ref[5] = React.useRef()

  const anchorKeyFigures = useMemo(
    () => slugify(gettext('anchor.key')),
    [gettext],
  )

  return (
    <Wrapper>
      <Content
        py={{ _: 10, lg: 136, md: 104 }}
        pb={20}
        position="relative"
        id={anchorKeyFigures}
      >
        <x.div
          position="absolute"
          top={{ _: -180, lg: -370, md: -340, sm: -180 }}
          left={0}
          px={{ _: 4, lg: 0, md: 10 }}
        >
          <Heading
            size="big"
            isDark
            maxWidth={{ md: 768, sm: 480 }}
            dangerouslySetInnerHTML={{
              __html: gettext('keyFigures.title'),
            }}
          />
        </x.div>
        <Block icon={star} justifyContent="flex-start" ml={{ _: 0, lg: 14 }}>
          <AnimatedOnScroll ref={ref[0]}>
            <Heading as="h3" size="normal" lineHeight={1}>
              <MemoizedCount />
              <x.span
                fontSize={{ _: '2xl', md: '3xl' }}
                lineHeight={{ _: 'tight', md: 'snug' }}
                display="block"
              >
                {gettext('keyFigures.uptime')}
              </x.span>
            </Heading>
            <Text
              dangerouslySetInnerHTML={{
                __html: gettext('keyFigures.sla'),
              }}
            />
          </AnimatedOnScroll>
        </Block>
        <Block
          icon={star}
          bar="right"
          pt={{ _: 9, md: 14 }}
          justifyContent="flex-start"
          ml={{ _: 0, lg: 14 }}
        >
          <AnimatedOnScroll ref={ref[1]}>
            <Heading as="h3" size="normal" lineHeight={1}>
              {gettext('keyFigures.years')}
              <x.span
                fontSize={{ _: '2xl', md: '3xl' }}
                lineHeight={{ _: 'tight', md: 'snug' }}
                display="block"
              >
                {gettext('keyFigures.xp')}
              </x.span>
            </Heading>
            <Text>{gettext('keyFigures.expertise')}</Text>
          </AnimatedOnScroll>
          <Bar
            bottom={{ _: -40, md: 0 }}
            left={{
              _: 'unset',
              lg: 'calc(100% + 104px)',
              md: 'calc(100% + 16px)',
            }}
            right={{ _: 0, lg: 'unset' }}
            w={{ _: 136, lg: 336, md: 160 }}
          />
        </Block>
        <Block icon={padlock} justifyContent="flex-end" mr={14} pt={24}>
          <AnimatedOnScroll ref={ref[2]}>
            <Heading as="h3" size="normal" lineHeight={1}>
              {gettext('keyFigures.mw')}
            </Heading>
            <Text
              dangerouslySetInnerHTML={{
                __html: gettext('keyFigures.colocation'),
              }}
            />
          </AnimatedOnScroll>
        </Block>
        <Block
          icon={padlock}
          justifyContent="flex-end"
          mr={14}
          pt={{ _: 9, md: 14 }}
        >
          <AnimatedOnScroll ref={ref[3]}>
            <Heading as="h3" size="normal" lineHeight={1}>
              {gettext('keyFigures.sqft')}
            </Heading>
            <Text>{gettext('keyFigures.connected')}</Text>
          </AnimatedOnScroll>
          <Bar
            bottom={{ _: -40, md: 0 }}
            left={{ _: -36, md: 'unset' }}
            right={{
              _: 'unset',
              lg: 'calc(100% + 192px)',
              md: 'calc(100% + 105px)',
            }}
            w={{ _: 136, lg: 336, md: 160 }}
          />
        </Block>
        <Block
          icon={globe}
          pt={24}
          justifyContent="flex-start"
          ml={{ _: 0, lg: 14 }}
        >
          <AnimatedOnScroll ref={ref[4]}>
            <Heading as="h3" size="normal" lineHeight={1}>
              {gettext('keyFigures.millions')}
              <x.span
                fontSize={{ _: '2xl', md: '3xl' }}
                lineHeight={{ _: 'tight', md: 'snug' }}
                display="block"
              >
                {gettext('keyFigures.users')}
              </x.span>
            </Heading>
            <Text>{gettext('keyFigures.cdn')}</Text>
          </AnimatedOnScroll>
        </Block>
        <Block
          icon={globe}
          justifyContent="flex-start"
          pt={{ _: 9, md: 14 }}
          ml={{ _: 0, lg: 14 }}
        >
          <AnimatedOnScroll ref={ref[5]}>
            <Heading as="h3" size="normal" lineHeight={1}>
              {gettext('keyFigures.340,000')}
              <x.span
                fontSize={{ _: '2xl', md: '3xl' }}
                lineHeight={{ _: 'tight', md: 'snug' }}
                display="block"
              >
                {gettext('keyFigures.servers')}
              </x.span>
            </Heading>
            <Text
              dangerouslySetInnerHTML={{
                __html: gettext('keyFigures.average'),
              }}
            />
          </AnimatedOnScroll>
          <Bar
            bottom={{ _: -40, md: 0 }}
            left={{
              _: 'unset',
              lg: 'calc(100% + 104px)',
              md: 'calc(100% + 16px)',
            }}
            right={{ _: 0, lg: 'unset' }}
            w={{ _: 136, lg: 336, md: 160 }}
          />
        </Block>
      </Content>
    </Wrapper>
  )
}

function Block({ icon, children, bar, ...props }) {
  return (
    <x.div display="flex" alignItems="flex-start" {...props}>
      <Svg
        asset={icon}
        width={{ _: '22px', md: '44px' }}
        height={{ _: '22px', md: '44px' }}
        viewBox="0 0 48 48"
        color="transparent"
        mr={{ _: 4, lg: 11, md: 10 }}
        mt={4}
      />
      <x.div
        position="relative"
        display="flex"
        flexDirection="column"
        maxWidth={{ _: 'unset', md: '424px' }}
        w={{ _: '100%', md: 'unset' }}
      >
        {children}
      </x.div>
    </x.div>
  )
}

function Count() {
  useCountUp({
    duration: 5,
    end: 14204000,
    formattingFn: value => new Intl.NumberFormat('en-US').format(value),
    ref: 'uptime-counter',
  })

  return <span id="uptime-counter" />
}
const MemoizedCount = React.memo(Count)

const Bar = styled(GradientBar)`
  position: absolute;
`
