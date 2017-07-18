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

//--------------------------GetRSAKey----------------------
router.post('/', function (req, res)
{
    let jsonRespMainPacket = null;

    //pass to PacketParser
    serverModule.ProcessPacket(req.body.JSON, function (error, result)
    {
        jsonRespMainPacket = result
    })

    res.end(jsonRespMainPacket);
    console.log('GetRSAKey Complete \n');
})
//------------------------------------------------------

module.exports = router

console.log('egs-router Initial End')