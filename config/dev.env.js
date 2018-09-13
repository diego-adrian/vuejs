var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SERVER: '"http://192.168.1.204:3000"',
  API_URL: '"http://192.168.1.204:3000/api/v1/"',
  AUTH_URL: '"http://192.168.1.204:3000/api/auth/signin"',
  ONBEFOREUNLOAD: false,
  DEBUG_MODE: true
})