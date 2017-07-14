'use strict'

console.log('server-module Initial Start')

let edge = require('edge')

//-----------------------------HelloWorld---------------------------------
exports.HelloWorld = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_Server_API.dll',
    typeName: 'SCG_Nodejs_Server_API.BridgeTest',
    methodName: 'HelloWorld' // This must be Func<object,Task<object>>
});
//------------------------------------------------------------------------
//---------------------------RSA------------------------------------------
exports.CreateRSAKey = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_Server_API.dll',
    typeName: 'SCG_Nodejs_Server_API.BridgeCryptography',
    methodName: 'CreateRSAKey' // This must be Func<object,Task<object>>
});
exports.GetRSAPublicKeyLocalString = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_Server_API.dll',
    typeName: 'SCG_Nodejs_Server_API.BridgeCryptography',
    methodName: 'GetRSAPublicKeyLocalString' // This must be Func<object,Task<object>>
});
exports.RSAEncrypt = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_Server_API.dll',
    typeName: 'SCG_Nodejs_Server_API.BridgeCryptography',
    methodName: 'RSAEncrypt' // This must be Func<object,Task<object>>
});
exports.RSADecrypt = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_Server_API.dll',
    typeName: 'SCG_Nodejs_Server_API.BridgeCryptography',
    methodName: 'RSADecrypt' // This must be Func<object,Task<object>>
});
//------------------------------------------------------------------------
console.log('server-module Initial Done')