var router = require('express').Router()
var logger = require('../../util/logger')

// TODO
// sample for testing
router.route('/')
    .get(function(req, res){
        logger.log('This is a user test')
        res.send({Test: "passed"})
    })

module.exports = router