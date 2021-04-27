const express = require('express')
const router = express.Router()

const cardService = require('../services/card.service')

router.post('/', cardService.checkValid)

module.exports = router