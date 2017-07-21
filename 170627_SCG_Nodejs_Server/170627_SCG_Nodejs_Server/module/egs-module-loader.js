'use strict'

console.log('server-module Initial Start')

let edge = require('edge')

//-------------------------Load Bridge-----------------------------------------------
//-----------------------------Bridge Test---------------------------------
exports.HelloWorld = edge.func({
    assemblyFile: 'lib/EgamingServerController.dll',
    typeName: 'EgamingServerController.BridgeTest',
    methodName: 'HelloWorld' // This must be Func<object,Task<object>>
});
//------------------------------------------------------------------------
//---------------------------Bridge InitServer------------------------------------------
exports.InitServer = edge.func({
    assemblyFile: 'lib/EgamingServerController.dll',
    typeName: 'EgamingServerController.BridgeInitServer',
    methodName: 'InitServer' // This must be Func<object,Task<object>>
});
exports.InitCryptography = edge.func({
    assemblyFile: 'lib/EgamingServerController.dll',
    typeName: 'EgamingServerController.BridgeInitServer',
    methodName: 'InitCryptography' // This must be Func<object,Task<object>>
});
exports.InitMongoDB = edge.func({
    assemblyFile: 'lib/EgamingServerController.dll',
    typeName: 'EgamingServerController.BridgeInitServer',
    methodName: 'InitMongoDB' // This must be Func<object,Task<object>>
});
//-----------------------------------------------------------------------------------------
//---------------------------Bridge PacketParser---------------------------------------------
exports.ProcessPacket = edge.func({
    assemblyFile: 'lib/EgamingServerController.dll',
    typeName: 'EgamingServerController.BridgePacketParser',
    methodName: 'ProcessPacket' // This must be Func<object,Task<object>>
});
//---------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------


console.log('server-module Initial Done')