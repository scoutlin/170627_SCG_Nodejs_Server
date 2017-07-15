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

router.use(function timeLog(req, res, next)
{
    console.log('Time: ', Date.now())
    next()
})

serverModule.CreateRSAKey(null, function (error, result) {

    console.log('CreateRSAKey: ' + result)

    serverModule.GetRSAPublicKey("local", function (error, result) {

        console.log('GetRSAPublicKey: ' + result)

        serverModule.GetRSAPublicKeyString(result, function (error, result) {

            console.log('GetRSAPublicKeyString: ' + result)
        })
    })
})



//--------------------------GetKey----------------------
router.post('/GetRSAKey', function (req, res)
{
    console.log('GetRSAKey')

    //Receive
    let reqMainPacket = JSON.parse(req.body.JSON);
    console.log('reqMainPacket.cmd: ' + reqMainPacket.cmd);
    //console.log('reqMainPacket.payload: ' + reqMainPacket.payload);

    let reqGetKeyPacket = JSON.parse(reqMainPacket.payload);
    //console.log('reqGetKeyPacket.publicRSAKeyString: ' + reqGetKeyPacket.publicRSAKeyString);

    let publicRSAKeyString = ''

    serverModule.GetRSAPublicKeyLocalString("", function (error, result)
    {
        publicRSAKeyString = result
        //console.log(publicRSAKeyString);
    })

    //SendBack
    let respGetKeyPacket = { "publicRSAKeyString": publicRSAKeyString }
    let respMainPacket = {
        "cmd": "EGS_Router_GetRSAKey",
        "isError": false,
        "payload": JSON.stringify(respGetKeyPacket)
    }

    let respGetKeyPacketJson = JSON.stringify(respMainPacket)

    res.end(respGetKeyPacketJson)  

    console.log('GetRSAKey Complete');
})
//------------------------------------------------------

//--------------------------GetToken----------------------
router.post('/GetToken', function (req, res)
{
    console.log('Into GetToken')

    //Receive
    let reqMainPacket = JSON.parse(req.body.JSON);
    console.log('reqMainPacket.cmd: ' + reqMainPacket.cmd);

    let reqGetToken = JSON.parse(reqMainPacket.payload);

    console.log('reqGetToken.account: ' + reqGetToken.account);
    console.log('reqGetToken.password: ' +reqGetToken.password);
    console.log('reqGetToken.key: ' +reqGetToken.key);
    console.log('reqGetToken.iv: ' + reqGetToken.iv);

    let account = ''
    let password = ''
    let key = ''
    let iv = ''

    serverModule.RSADecrypt(reqGetToken.account, function (error, result) {

        let account = result
        console.log(account)
    })

    serverModule.RSADecrypt(reqGetToken.password, function (error, result) {
        let password = result
        console.log(password)
    })

    serverModule.RSADecrypt(reqGetToken.key, function (error, result) {
        let key = result
        console.log(key)
    })

    serverModule.RSADecrypt(reqGetToken.iv, function (error, result) {
        let iv = result
        console.log(iv)
    })

    console.log('account: ' + account);
    console.log('password: ' + password);
    console.log('key: ' + key);
    console.log('iv: ' + iv);


    let respGetTokenPacket = { "token": "Yeah!!" }
    let respMainPacket = {
        "cmd": "EGS_Router_GetToken",
        "isError": false,
        "payload": JSON.stringify(respGetTokenPacket)
    }

    let respGetKeyPacketJson = JSON.stringify(respMainPacket)

    res.end(respGetKeyPacketJson)  

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