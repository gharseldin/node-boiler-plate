// This is the entry point to the server
// If you have an index.js file on the root of a folder in node
// you can just require that folder and node will automatically
// require the index.js in that folder

// First thing we setup the configuration before anything 
var config = require('./server/config/config')
var app = require('./server/server')

// The logger is a wrapper around the console.log function. 
// This wrapper will add color, log objects as json and can
// be turned on and off as required so we don't have to remove
// all the console.log commangs from our files
var logger = require('./server/util/logger')

app.listen(config.port)
logger.log('listening on http://localhost:' + config.port)
