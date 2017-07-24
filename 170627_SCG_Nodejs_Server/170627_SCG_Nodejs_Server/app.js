'use strict'
console.log('app Start')

//-------------------local-----------------------------
let ClassTest = require('./ClassTest')
let CommonSetting = require('./CommonSetting')
let expressModuleLoader = require('./module/express-module-loader')
//-----------------------------------------------------

let mClassTest = new ClassTest()
mClassTest.OhYeah('!!!!!!!!!!!!!!YEAH!!!!!!!!!!!!!!!')
ClassTest.StaticOhYeah('Static Yeah')
console.log(ClassTest.staticVariable001)


let mClassTest2 = ClassTest.Instance
mClassTest2.yeah++
console.log('yeah: ' + mClassTest2.yeah);

let mClassTest3 = ClassTest.Instance
mClassTest3.yeah++
console.log('yeah: ' + mClassTest3.yeah)

console.log('Yeah')