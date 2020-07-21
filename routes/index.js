const express = require('express');
const router = express.Router()
const candidate = require('./candidate')



router.use('/candidate', candidate)
// router.use('/event', event)
// router.use('/group', group)


module.exports = router