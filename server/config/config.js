var _ = require('lodash')

var config = {
    dev: 'development',
    test: 'testing',
    prod: 'production',
    port: process.env.PORT || 3000
}
process.env.NODE_ENV = process.env.NODE_ENV || config.dev
config.env = process.env.NODE_ENV

var envConfig
// require could error out if the file doesn't exist
// so lets try this statement and fallback to an empty
// object if it does error out
try {
    envConfig = require('./' + config.env)
    // just to make sure the require actually got something back
    envConfig = envConfig || {}
} catch(e){
    envConfig = {}
}

// merge the two config files together
// The envConfig file will overwrite properties on the config object
module.exports = _.merge(config, envConfig)