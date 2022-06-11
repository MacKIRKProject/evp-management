import { compose, createCss, system } from '@xstyled/styled-components'
import {
  breakoutLink,
  outlineColor,
  outlineOffset,
  textUnderlineOffset,
  textDecorationThickness,
} from './utilities'

const css = createCss(
  compose(
    system,
    breakoutLink,
    outlineOffset,
    outlineColor,
    textUnderlineOffset,
    textDecorationThickness,
  ),
)

export const { x } = css
