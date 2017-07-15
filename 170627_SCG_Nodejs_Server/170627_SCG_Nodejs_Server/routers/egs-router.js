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

//Sample
router.use(function timeLog(req, res, next)
{
    console.log('Time: ', Date.now())
    next()
})

//------------------------------Init---------------------------------------------
//Create Local RSA Key
let isCreateRSAKeySuccess = false
serverModule.CreateRSAKey(null, function (error, result)
{
    isCreateRSAKeySuccess = result
})
console.log('egs-router - 26 - isCreateRSAKeySuccess: ' + isCreateRSAKeySuccess)
//-------------------------------------------------------------------------------


//--------------------------GetRSAKey----------------------
router.post('/GetRSAKey', function (req, res)
{
    let jsonRespMainPacket = null;

    //pass to PacketParser
    serverModule.ProcessPacket(req.body.JSON, function (error, result)
    {
        jsonRespMainPacket = result
    })

    res.end(jsonRespMainPacket);
    console.log('GetRSAKey Complete');
})
//------------------------------------------------------

//--------------------------GetAESKey----------------------------
router.post('/GetAESKey', function (req, res)
{
    

})
//------------------------------------------------------------

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