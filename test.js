'use strict';

try {
  let eth = require('./eth/tokens.json')
  let etc = require('./etc/tokens.json')
  console.log('asset.json is valid!')
  process.exit(0)
} catch(e) {
  console.error(e)
  process.exit(1)
}
