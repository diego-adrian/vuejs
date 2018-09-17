var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BACKEND: '"http://192.168.1.203:3000"',
  ONBEFOREUNLOAD: false,
  DEBUG_MODE: true
})