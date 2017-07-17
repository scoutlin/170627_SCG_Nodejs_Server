'use strict'

console.log('server-module Initial Start')

let edge = require('edge')

//-----------------------------Bridge Test---------------------------------
exports.HelloWorld = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_Server_API.dll',
    typeName: 'SCG_Nodejs_Server_API.BridgeTest',
    methodName: 'HelloWorld' // This must be Func<object,Task<object>>
});
//------------------------------------------------------------------------

//---------------------------Bridge Cryptography------------------------------------------
exports.CreateRSAKey = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_Server_API.dll',
    typeName: 'SCG_Nodejs_Server_API.BridgeCryptography',
    methodName: 'CreateRSAKey' // This must be Func<object,Task<object>>
});
//-----------------------------------------------------------------------------------------
//---------------------------Bridge PacketParser---------------------------------------------
exports.ProcessPacket = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_Server_API.dll',
    typeName: 'SCG_Nodejs_Server_API.BridgePacketParser',
    methodName: 'ProcessPacket' // This must be Func<object,Task<object>>
});
//---------------------------------------------------------------------------------------------




console.log('server-module Initial Done')