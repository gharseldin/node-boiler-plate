var express = require('express')
var app = express()
var api = require('./api/api')

// setup the application middleware
require('./middleware/appMiddleware')(app)

// setup the api
app.use('/api/', api)

// setup global error handling
app.use(function(err, req, res, next){
    if(err){
        res.staus(500).send(err)
    }
})

// export the app for testing
module.exports = app