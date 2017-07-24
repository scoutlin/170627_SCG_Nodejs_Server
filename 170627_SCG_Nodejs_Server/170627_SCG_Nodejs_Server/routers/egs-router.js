'use strict'
console.log('egs-router Initial Start')

//--------------------npm---------------
let express = require('express')
//--------------------------------------
//-------------------local module-----------------------------
let serverModule = require('../module/egs-module-loader')
//-----------------------------------------------------

let router = express.Router()



//---------------------------Init All Module-------------------------------------------
//Init MongoDB
serverModule.InitMongoDB("mongodb://Egaming000:Jumbo_12718984@egaming000-shard-00-00-spjyl.mongodb.net:27017,egaming000-shard-00-01-spjyl.mongodb.net:27017,egaming000-shard-00-02-spjyl.mongodb.net:27017/Egaming?ssl=true&replicaSet=Egaming000-shard-0&authSource=admin", function (error, result) {
    if (result == true) {
        console.log('MongoDB Init Success!!')
    }
    else {
        console.log('MongoDB Init Fail!!');
    }
})
//-------------------------------------------------------------------------------------------



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