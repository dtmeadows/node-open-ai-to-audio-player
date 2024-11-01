import * as plugins from './smartenv.plugins'
export let getEnvString = function (): string {
  if (typeof window !== 'undefined') {
    return 'browser'
  } else if (typeof process !== 'undefined') {
    return 'node'
  }
}

export let getUserAgentString = function (): string {
  if (isBrowser()) {
    return navigator.userAgent
  } else {
    return undefined
  }
}

export let isNode = function (): boolean {
  return getEnvString() === 'node'
}

export let getNodeVersion = function (): string {
  return process.version
}

export let isBrowser = function (): boolean {
  return !isNode()
}

export let isCI = function () {
  if (process.env.CI) {
    return true
  } else {
    return false
  };
}

export let isC9 = function () {
  if (process.env.C9_HOSTNAME) {
    return true
  } else {
    return false
  }
}

export let isTravis = function () {
  if (process.env.TRAVIS) {
    return true
  } else {
    return false
  };
}
