'use strict'
console.log('mongodb-module Initial Start')

let edge = require('edge')

exports.CreateUser = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_DataBase_API.dll',
    typeName: 'SCG_Nodejs_DataBase_API.Bridge',
    methodName: 'ConnectDB' // This must be Func<object,Task<object>>
})

console.log('mongodb-module Initial Done')