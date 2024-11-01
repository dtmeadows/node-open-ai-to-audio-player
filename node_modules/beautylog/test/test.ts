import { tap, expect } from 'tapbundle'

import beautylog = require('../dist/index')
import * as beautyremote from 'beautyremote'

import * as qenv from 'qenv'
let testQenv = new qenv.Qenv(process.cwd(), process.cwd() + '/.nogit')

import * as smartdelay from 'smartdelay'

tap.test('.registerRemote should accept a beautyremote', async () => {
  let myRemote = new beautyremote.Loggly({
    token: process.env.LOGGLY_TOKEN
  })
  beautylog.registerRemote(myRemote)
})

tap.test('.log(message) should print a blue Dir message', async () => {
  beautylog.log('beautylog.log(), with normal logText, without logType')
})

tap.test('.dir(message) should print a blue Dir message', async () => {
  beautylog.dir('beautylog.dir(), with normal logText, without logType')
})

tap.test('.error(message) should print a red error message', async () => {
  beautylog.error('beautylog.error(), with normal logText, without logType')
})

tap.test('.figlet should print nice fonts to console in yellow', async () => {
  return beautylog.figlet('Async!', { font: 'Star Wars', color: 'orange' })
})

tap.test('.figletSync should print nice fonts to console in yellow', async () => {
  beautylog.figletSync('Sync!', { font: 'Star Wars', color: 'blue' })
})

tap.test('.info(message) should display a purple info message', async () => {
  beautylog.info('beautylog.dir(), with normal logText, without logType')
})

tap.test('.logReduced(message) should only log two messages', async () => {
  beautylog.logReduced('Message 1')
  beautylog.logReduced('Message 1')
  beautylog.logReduced('Message 1')
  beautylog.logReduced('Message 1')
  beautylog.logReduced('Message 2')
  beautylog.logReduced('Message 2')
})

tap.test('.ok(message) should display a green ok message', async () => {
  beautylog.ok('beautylog.ok() works!')
})

tap.test('.newLine(number) create specified amount of new lines', async () => {
  beautylog.newLine(1)
})

tap.test('.ora(text,color) should display, update, and end a message', async () => {
  beautylog.ora.start('This is a test text', 'green')
  await smartdelay.delayFor(2000)
  beautylog.ora.text('updated text!')
  await smartdelay.delayFor(2000)
  beautylog.info('another log message that uses the normal log function')
  await smartdelay.delayFor(2000)
  beautylog.ora.endOk('Allright, ora works!')
})

tap.test('.ora(text,color) should display an error message when ended with error', async () => {
  beautylog.ora.start('This is another test text', 'green')
  await smartdelay.delayFor(2000)
  beautylog.ora.endError('Allright, ora displays an error!')
})

tap.test('.success(message) should display an orange warn message', async () => {
  beautylog.success('beautylog.success() works!')
})

tap.test('.warn should display a orange warn message', async () => {
  beautylog.warn('beautylog.warn() works!')
})

tap.test('.note should display a pink note', async () => {
  beautylog.note('beautylog.note() works!')
})
