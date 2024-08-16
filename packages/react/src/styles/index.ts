import {
  fonts,
  colors,
  fontSizes,
  fontWeights,
  space,
  radii,
  lineHeights,
} from '@desk-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    borderRadius: 'radii',
  },
  theme: {
    colors,
    fonts,
    space,
    fontSizes,
    fontWeights,
    radii,
    lineHeights,
  },
})
