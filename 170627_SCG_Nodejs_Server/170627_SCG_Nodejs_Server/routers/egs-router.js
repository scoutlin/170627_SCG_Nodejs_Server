'use strict'
console.log('egs-router Initial Start')

//--------------------npm---------------
let express = require('express')
//--------------------------------------
//-------------------local module-----------------------------
let serverModule = require('../module/server-module-loader')
let mogodbModule = require('../module/mongodb-module-loader')
//-----------------------------------------------------

let router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

serverModule.CreateRSAKey("", function (error, result) {

    console.log('CreateRSAKey Complete: ' + result)
})



//--------------------------GetKey----------------------
router.post('/GetKey', function (req, res)
{
    console.log('GetKey')

    //Receive
    let reqMainPacket = JSON.parse(req.body.JSON);
    console.log('reqMainPacket.cmd: ' + reqMainPacket.cmd);
    console.log('reqMainPacket.payload: ' + reqMainPacket.payload);

    let reqGetKeyPacket = JSON.parse(reqMainPacket.payload);
    console.log('reqGetKeyPacket.publicRSAKeyString: ' + reqGetKeyPacket.publicRSAKeyString);

    let publicRSAKeyString = ""

    serverModule.GetPublicKeyString("", function (error, result)
    {
        publicRSAKeyString = result
    })

    //SendBack
    let respGetKeyPacket = { "publicRSAKeyString": publicRSAKeyString }
    let respMainPacket = {
        "cmd": "EGS_Router_GetKey",
        "isError": false,
        "payload": JSON.stringify(respGetKeyPacket)
    }

    let respGetKeyPacketJson = JSON.stringify(respMainPacket)

    res.end(respGetKeyPacketJson)  
})
//------------------------------------------------------

//--------------------------GetToken----------------------
router.post('/GetToken', function (req, res)
{
    console.log('GetToken')


})
//------------------------------------------------------

//--------------------------RegistNewMember----------------------
router.post('/RegistNewMember', function (req, res)
{
    console.log('RegistNewMember')
})
//------------------------------------------------------

//--------------------------MemberLogin----------------------
router.post('/MemberLogin', function (req, res)
{
    console.log('MemberLogin')
})
//------------------------------------------------------

//--------------------------MemLogout----------------------
router.post('/MemLogout', function (req, res)
{
    console.log('MemLogout')
})
//------------------------------------------------------

module.exports = router

console.log('egs-router Initial End')