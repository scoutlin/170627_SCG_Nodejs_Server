'use strict'

console.log('Hello world')


let express = require('express')
let edge = require('edge')
let bodyPaser = require('body-parser')

let app = express()
app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({ extended: false }))

//let helloWorld = edge.func(`
//    async (input) => { 
//        return ".NET Welcomes " + input.ToString(); 
//    }
//`);


let helloWorld = edge.func(`
    using System.Threading.Tasks;
    
    public class Startup
    {
        public async Task<object> Invoke(object input)
        {
            Counter mCounter = Counter.GetInstance();

            mCounter.fuck++;

            return mCounter.fuck;
        }
    }

    public class Counter
    {
        public static Counter mCounter;
        public int fuck = "";
        
        public static GetInstance()
        {
            if(mCounter == null)
            {
                mCounter = new Counter();
            }
            
            return mCounter;
        }
    }
`);

app.post('/HelloWorld', function (req, res) {

    helloWorld('JavaScript', function (error, result) {
        if (error) throw error;
        console.log(result);
    });

    res.end(result);

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
    });

    app.listen(3000);

    console.log('Yeah');