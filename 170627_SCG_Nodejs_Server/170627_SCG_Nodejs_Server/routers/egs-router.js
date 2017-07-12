'use strict'
console.log('egs-router Initial Start')

var express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

//--------------------------GetKey----------------------
router.get('/GetKey', function (req, res) {
    res.send('GetKey')
    res.end()
    console.log('GetKey')
})
//------------------------------------------------------

//--------------------------GetToken----------------------
router.post('/GetToken', function (req, res) {
    console.log('GetToken')


})
//------------------------------------------------------

//--------------------------RegistNewMember----------------------
router.post('/RegistNewMember', function (req, res) {
    console.log('RegistNewMember')
})
//------------------------------------------------------

//--------------------------MemberLogin----------------------
router.post('/MemberLogin', function (req, res) {
    console.log('MemberLogin')
})
//------------------------------------------------------

//--------------------------MemLogout----------------------
router.post('/MemLogout', function (req, res) {
    console.log('MemLogout')
})
//------------------------------------------------------

module.exports = router

console.log('egs-router Initial End')