import 'typings-global'
import * as ansiColors from 'ansi-256-colors'

/**
 * all the color names that are available for proper xterm translation
 */
export type TColorName =
  'black' |
  'blue' |
  'brown' |
  'cyan' |
  'green' |
  'orange' |
  'pink' |
  'red' |
  'white'

export interface IRGB {
  r: number,
  b: number,
  g: number
}

/**
 * the color translator function
 */
let colorTranslator = (colorArg: TColorName): IRGB => {
  switch (colorArg) {
    case 'black':
      return { r: 0, g: 0, b: 0 }
    case 'blue':
      return { r: 0, g: 2, b: 5 }
    case 'brown':
      return { r: 1, g: 0, b: 0 }
    case 'cyan':
      return { r: 2, g: 4, b: 4 }
    case 'green':
      return { r: 2, g: 4, b: 1 }
    case 'orange':
      return { r: 5, g: 3, b: 1 }
    case 'pink':
      return { r: 3, g: 2, b: 4 }
    case 'red':
      return { r: 5, g: 0, b: 0 }
    case 'white':
      return { r: 5, g: 5, b: 5 }
    default:
      return { r: 5, g: 5, b: 5 }
  }
}

/**
 * colors the font of a string
 */
let coloredFont = (stringArg: string, colorArg: TColorName) => {
  let rgbCode: IRGB = colorTranslator(colorArg)
  return ansiColors.fg.getRgb(rgbCode.r, rgbCode.g, rgbCode.b) + stringArg
}

/**
 * colors the back of a string
 */
let coloredBackground = (stringArg: string, colorArg: TColorName) => {
  let rgbCode = colorTranslator(colorArg)
  return ansiColors.bg.getRgb(rgbCode.r, rgbCode.g, rgbCode.b) + stringArg
}

/**
 * color a string with xterm
 */
export let coloredString = (stringArg: string, colorFontArg: TColorName, colorBackgroundArg?: TColorName): string => {
  let returnString = coloredFont(stringArg, colorFontArg)
  if (colorBackgroundArg) {
    returnString = coloredBackground(returnString, colorBackgroundArg)
  }
  returnString = returnString + ansiColors.reset
  return returnString
}
