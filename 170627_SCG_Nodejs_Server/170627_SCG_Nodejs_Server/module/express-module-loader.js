'use strict'
console.log('express-module Initial Start')

//--------------------npm---------------
let fs = require('fs')
let spdy = require('spdy')
let express = require('express')
let bodyPaser = require('body-parser')
let helmet = require('helmet')
let session = require('express-session')
//--------------------------------------
//-------------------router module---------------------
let egsRouter = require('../routers/egs-router')
let cgmRouter = require('../routers/cgm-router')
//-----------------------------------------------------
//---------------Variable-----------------------------
let portHttps = 9478
let portHttp = 3000
//-----------------------------------------------------

let app = express()
app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({ extended: false }))
app.use(helmet())
app.set('trust proxy', 1) //trust first proxy
app.use(session({
    secret: 's3Cur3',
    name: 'sessionId'
})
)

let expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    cookie: {
                secure: true,
                httpOnly: true,
                domain: 'example.com',
                path: 'foo/bar',
                expires: expiryDate
        }
    })
)

let options = {
    key: fs.readFileSync(__dirname + '/Certificate/server.key'),
    cert: fs.readFileSync(__dirname + '/Certificate/server.crt')
}

spdy.createServer(options, app).listen(portHttps, function (error) {
    if (error) {
        console.error(error)
        return process.exit(1)
    } else {
        console.log('Listening on portHttps: ' + portHttps +'.')
    }
})




app.use('/egs-router', egsRouter)
app.use('/cgm-router', cgmRouter)


//------------------For Test--------------------------------------
app.get('/Http2Test', function (req, res) {

    res.status(200).json({message: 'OK'})
})


app.get('/Bingo', function (req, res) {

    let value1 = req.query.value1;
    let value2 = req.query.value2;

    console.log("value1: " + value1)
    console.log("value2: " + value2)

    mogodbModule.CreateUser('mongodb://localhost:27017', function (error, result) {
        if (error) throw error;
        console.log(result);
    })

    let mRESP = { "JSON": "Bindo is awesome!!" }
    let mRESP_JSON = JSON.stringify(mRESP)

    res.end(mRESP_JSON);
})

app.get('/HelloWorld', function (req, res) {

    console.log("Hello World");

    let payload = {
        anInteger: 1,
        aNumber: 3.1415,
        aString: 'foo',
        aBoolean: true,
        aBuffer: new Buffer(10),
        anArray: [1, 'foo'],
        anObject: { a: 'foo', b: 12 }
    };

    serverModule.HelloWorld(payload, function (error, result)
    {
        if (error) throw error;
        console.log(result);

        //let Package_HelloWorld = { 'count': result, 'text': 'RESP_HelloWorld' }
        let Package_HelloWorld_JSON = JSON.stringify(result)
        console.log("Package_HelloWorld_JSON: " + Package_HelloWorld_JSON)

        res.end(Package_HelloWorld_JSON);
    });
});

app.get('/Test', function (req, res)
{
    res.send('Fuck!!!!!!!!!!!!!!!!!!')
    res.end()
})



app.post('/ServerVersion', function (req, res)
{
    let reqBodyJSON = req.body.JSON;
    //console.log('reqBodyJSON_json: ' + reqBodyJSON)

    let reqMainPacket = JSON.parse(reqBodyJSON);
    //console.log('reqMainPacket.enumCmd: ' + reqMainPacket.enumCmd);
    //console.log('reqMainPacket.payload: ' + reqMainPacket.payload);

    let serverVersionPacket = JSON.parse(reqMainPacket.payload);
    //console.log('serverVersionPacket.version: ' + serverVersionPacket.version);
    //console.log('serverVersionPacket.bundle: ' + serverVersionPacket.bundle);

    //let Package_Version = { "version": "1.0.0", "bundle": "0" }
    let Package_Version = { "version": "1.0.0", "bundle": serverVersionPacket.bundle }
    let Packet_Version_JSON = JSON.stringify(Package_Version)
    //console.log("Packet_Version_JSON: " + Packet_Version_JSON)

    //if ((serverVersionPacket.bundle % 10000) == 0)
    //{
    //    console.log('bundle: ' + serverVersionPacket.bundle/* + " Date: " + Date.now()*/)
    //}

    //To Object
    //JSON.parse()
    //To String
    //JSON.stringify()

    //res.send('Hello World')
    res.end(Packet_Version_JSON);
})
//------------------------------------------------------------------------


app.listen(portHttp)

console.log('express-module Initial Done')
