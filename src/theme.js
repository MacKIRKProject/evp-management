import '@fontsource/open-sans' // 400 normal
import '@fontsource/poppins/600.css' // 600 semibold
import '@fontsource/poppins/700.css' // 700 bold

import {
  defaultTheme,
  generateHexAlphaVariants,
} from '@xstyled/styled-components'

const colors = {
  background: '#ffffff',
  brand: '#4f0599',
  'gray-300': '#d4d4d8',
  'gray-800': '#27272a',
  secondary: '#ffffff',
  'secondary-100': '#f4f4f5',
  'secondary-300': '#d4d4d8',
  tertiary: '#e10019',
  marronSombre: '#a4543d',
  marronClair: '#cd7d5f',
  beigeSombre: '#dbaca2',
  beigeClair: '#f1d1ba',
}

const gradients = {
  'background-gradient': `linear-gradient(83deg, ${colors.brand} 22%, ${colors.tertiary} 92%)`,
  'button-gradient': `linear-gradient(270deg, ${colors.brand} -13%, ${colors.tertiary} 98%)`,
  'lava-gradient': `linear-gradient(312deg, ${colors.brand} 0%, ${colors.tertiary} 66%, ${colors.brand} 100%)`,
}

const colorWithAlpha = {
  ...generateHexAlphaVariants(
    {
      primary: '#0f111a',
    },
    [90],
  ),
}

/* eslint sort-keys: ["error", "asc", {natural: false}] */
/* eslint-env es6 */
const fonts = {
  ...defaultTheme.fonts,
  opensans:
    'Open Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  poppins:
    'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
}

const fontSizes = {
  ...defaultTheme.fontSizes,
  '1xl': '1rem',
  '3xl': '2rem',
  '4xl': '2.5rem',
  '6xl': '4rem',
}

const shadows = {
  ...defaultTheme.shadows,
  'blur-secondary': `0 0 6px 0 ${colors.primary}`,
}

const transforms = {
  'rotate-0': 'rotate(0)',
  'rotate-180': 'rotate(-180deg)',
  'translate-0': 'translate3d(0, 0, 0)',
  'translate-100': 'translate3d(-100%, 0, 0)',
}

const transitions = {
  ...defaultTheme.transitions,
  'transform-ease-in': 'transform .24s ease-in',
  'transform-ease-out': 'transform .46s ease-out',
}

const radii = {
  ...defaultTheme.radii,
  '4xl': '2rem',
}

const theme = {
  ...defaultTheme,
  colors: { ...gradients, ...colors, ...colorWithAlpha },
  fontSizes,
  fonts,
  radii,
  shadows,
  transforms,
  transitions,
}

// eslint-disable-next-line no-console
if (process.env.NODE_ENV === 'development') console.log(theme)

export default theme
