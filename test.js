'use strict';
const _ = require('lodash')

function findDuplicate(arr) {
  let hm = {}
  for (let key of arr) {
    if (!hm[key]) {
      hm[key] = true
    } else {
      return key
    }
  }
}

function ensureNoDuplicates(arr) {
  let allAddresses = _.map(arr, 'address')
  let lowerCaseAddys = _.map(allAddresses, x => x.toLowerCase())
  let unique = _.uniq(lowerCaseAddys)
  if (unique.length !== lowerCaseAddys.length) {
    throw new Error(`Duplicates detected! Check ${findDuplicate(lowerCaseAddys)}`)
  }
}

try {
  let eth = require('./eth/tokens.json')
  let etc = require('./etc/tokens.json')
  console.log('asset.json is valid!')

  ensureNoDuplicates(eth)
  ensureNoDuplicates(etc)

  process.exit(0)
} catch(e) {
  console.error(e)
  process.exit(1)
}
