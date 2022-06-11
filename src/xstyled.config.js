import { compose, createCss, system } from '@xstyled/styled-components'
import {
  breakoutLink,
  outlineColor,
  outlineOffset,
  textUnderlineOffset,
  textDecorationThickness,
  fontVariant,
} from './utilities'

const css = createCss(
  compose(
    system,
    breakoutLink,
    outlineOffset,
    outlineColor,
    textUnderlineOffset,
    textDecorationThickness,
    fontVariant,
  ),
)

export const { x } = css
