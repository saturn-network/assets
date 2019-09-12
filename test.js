'use strict';

try {
  let eth = require('./eth/tokens.json')
  let etc = require('./etc/tokens.json')
  process.exit(0)
} catch(e) {
  console.error(e)
  process.exit(1)
}
