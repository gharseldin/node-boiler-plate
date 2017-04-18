var router = require('express').Router()

// api router will mount other routers for all our resources
// TODO
// sample
router.use('/users', require('./user/userRoutes'))


module.exports = router