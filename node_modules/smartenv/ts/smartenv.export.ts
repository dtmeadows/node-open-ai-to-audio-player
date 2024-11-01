/**
 * Deals with the environment the current JS script is running in.
 */
import * as plugins from './smartenv.plugins'
import * as classes from './smartenv.classes.environment'
import * as objectStorage from './smartenv.objectstorage'


let environment: classes.Environment = null

/**
 * returns the environment
 * @returns {Environment}
 */
export let getEnv = function () {
  if (!environment) {
    environment = new classes.Environment()
  };
  return environment
}



/**
 * prints the environment to console
 */
export let printEnv = function () {
  if (this.getEnv().isNode) {
    console.log('running on NODE')
    let smartenvVersion = require('../package.json').version
    console.log('node version is ' + this.getEnv().nodeVersion + ' and smartenv version is ' + smartenvVersion)
  } else {
    console.log('running on BROWSER')
    console.log('browser is ' + this.getEnv().userAgent)
  }
  console.log('the smartenv registration store currently holds the following properties:')
  console.log(Object.getOwnPropertyNames(objectStorage.obs.getAll()))
}

export interface IEnvObject {
  name: string
  value: string
}

export let getEnvVars = async (regexArg: RegExp) => {
  let resultArray: IEnvObject[] = []
  for (let key in process.env) {
    if (regexArg.test(key)) {
      resultArray.push({
        name: key,
        value: process.env[key]
      })
    }
  }
  return resultArray
}
