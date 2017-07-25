'use strict'
console.log('cgm-router Initial Start')

var express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


module.exports = router

console.log('cgm-router Initial End')