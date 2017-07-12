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

//------------------------------------------------------------------------
console.log('server-module Initial Done')