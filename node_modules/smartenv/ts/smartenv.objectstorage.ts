import plugins = require('./smartenv.plugins')

export let obsItems: any = {}

/**
 * Objectstorage allows easy sharing of objects within node
 */
export let obs: any = {
  add: (keyNameArg, objectArg) => {
    if (!keyNameArg) {
      console.log('keyName is undefined')
      return
    }
    if (!objectArg) {
      console.log('objectArg is undefined')
    }
    if (!(obsItems[ keyNameArg ])) {
      obsItems[ keyNameArg ] = objectArg
    } else {
      console.log('object is already present, so add operation has failed.')
    }
    return obsItems[ keyNameArg ]
  },
  replace: function (paramNameArg, objectArg) {
    obsItems[ paramNameArg ] = objectArg
  },
  merge: function (paramNameArg, objectArg) {
    if (!(typeof obsItems[ paramNameArg ] === 'undefined')) {
      obsItems[ paramNameArg ] = plugins.lodash.assign(obsItems[ paramNameArg ], objectArg)
    } else {
      console.log('object is not present, so there is nothing to merge')
    }
  },
  get: function (keyName) {
    return obsItems[ keyName ]
  },
  getAll: function () {
    return obsItems
  },
  addComplete: function (itemsArg) {
    obsItems = plugins.lodash.assign(obsItems, itemsArg)
    return obsItems
  }
}
