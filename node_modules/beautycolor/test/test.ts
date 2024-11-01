import { expect, tap } from 'tapbundle'

import * as beautycolor from '../ts/index'

tap.test('should produce a blue font', async () => {
  console.log(beautycolor.coloredString('this is a blue font, no background', 'blue'))
})

tap.test('should produce a red string with green background', async () => {
  console.log(beautycolor.coloredString('this is a red font with green background', 'red', 'green'))
})

tap.test('should produce different font colors', async () => {
  console.log(
    beautycolor.coloredString('blue', 'blue'),
    beautycolor.coloredString('brown', 'brown'),
    beautycolor.coloredString('red', 'red'),
    beautycolor.coloredString('orange', 'orange'),
    beautycolor.coloredString('green', 'green'),
    beautycolor.coloredString('pink', 'pink'),
    beautycolor.coloredString('cyan', 'cyan')
  )
})

tap.test('should produce different background colors', async () => {
  console.log(
    beautycolor.coloredString('blue', 'white', 'blue'),
    beautycolor.coloredString('brown', 'white', 'brown'),
    beautycolor.coloredString('red', 'white', 'red'),
    beautycolor.coloredString('orange', 'white', 'orange'),
    beautycolor.coloredString('green', 'white', 'green'),
    beautycolor.coloredString('pink', 'white', 'pink'),
    beautycolor.coloredString('cyan', 'white', 'cyan')
  )
})

tap.start()
