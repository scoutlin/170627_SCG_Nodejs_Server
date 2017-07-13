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
exports.GetPublicKeyString = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_Server_API.dll',
    typeName: 'SCG_Nodejs_Server_API.BridgeCryptography',
    methodName: 'GetPublicKeyString' // This must be Func<object,Task<object>>
});
exports.Encrypt = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_Server_API.dll',
    typeName: 'SCG_Nodejs_Server_API.BridgeCryptography',
    methodName: 'Encrypt' // This must be Func<object,Task<object>>
});
exports.Decrypt = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_Server_API.dll',
    typeName: 'SCG_Nodejs_Server_API.BridgeCryptography',
    methodName: 'Decrypt' // This must be Func<object,Task<object>>
});
//------------------------------------------------------------------------
console.log('server-module Initial Done')