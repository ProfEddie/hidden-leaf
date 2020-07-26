const express = require('express');
const router = express.Router()
const candidate = require('./candidate')
const admin = require('./admin')
const event = require('./event')
const group = require('./group')


router.use('/candidate', candidate)
router.use('/login', admin)
// router.use('/event', event)
// router.use('/group', group)


module.exports = router