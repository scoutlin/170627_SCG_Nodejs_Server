'use strict'

console.log('Hello world')


let express = require('express')
let edge = require('edge')
let bodyPaser = require('body-parser')

let app = express()
app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({ extended: false }))


let CreateUser = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_DataBase_API.dll',
    typeName: 'SCG_Nodejs_DataBase_API.Bridge',
    methodName: 'ConnectDB' // This must be Func<object,Task<object>>
})




app.get('/Bingo', function (req, res) {

    let value1 = req.query.value1;
    let value2 = req.query.value2;

    console.log("value1: " + value1)
    console.log("value2: " + value2)

    CreateUser('mongodb://localhost:27017', function (error, result) {
        if (error) throw error;
        console.log(result);
    })

    let mRESP = { "JSON": "Bindo is awesome!!" }
    let mRESP_JSON = JSON.stringify(mRESP)

    res.end(mRESP_JSON);
});


let helloWorld = edge.func({
    assemblyFile: 'lib/SCG_Nodejs_Server_API.dll',
    typeName: 'SCG_Nodejs_Server_API.Bridge',
    methodName: 'PlusCounter' // This must be Func<object,Task<object>>
});

app.post('/HelloWorld', function (req, res) {

    console.log("Hello World");

    helloWorld('JavaScript', function (error, result) {
        if (error) throw error;
        console.log(result);

        let Package_HelloWorld = { 'count': result, 'text': 'RESP_HelloWorld' }
        let Package_HelloWorld_JSON = JSON.stringify(Package_HelloWorld)
        console.log("Package_HelloWorld_JSON: " + Package_HelloWorld_JSON)

        res.end(Package_HelloWorld_JSON);
    });
});



    app.post('/ServerVersion', function (req, res) {

        console.log("req.url: " + req.url);
        console.log("HEADER: " + req.body.HEADER);
        console.log("JSON: " + req.body.JSON);

        let Package_Version = { "version": "1.0.0", "bundle": "0" }
        let Packet_Version_JSON = JSON.stringify(Package_Version)
        console.log("Packet_Version_JSON: " + Packet_Version_JSON)

        //To Object
        //JSON.parse()
        //To String
        //JSON.stringify()

        //res.send('Hello World')
        res.end(Packet_Version_JSON);
    })

    app.listen(3000)

    console.log('Yeah')