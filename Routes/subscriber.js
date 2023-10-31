const express = require('express')
const router = express.Router()
const { addSubscriber } = require('../Controller/subscriber')

router.post('/subscribe', addSubscriber)

module.exports = router
