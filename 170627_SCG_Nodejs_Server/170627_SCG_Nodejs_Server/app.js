'use strict'

console.log('Hello world')


let express = require('express')
let edge = require('edge')

let app = express()
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)



let helloWorld = edge.func(`
    async (input) => { 
        return ".NET Welcomes " + input.ToString(); 
    }
`);

helloWorld('JavaScript', function (error, result) {
    if (error) throw error;
    console.log(result);
});


console.log('Yeah')