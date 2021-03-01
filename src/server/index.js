var path = require('path')
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv').config();
const apikey = process.env.API_KEY
const meaningCloud = require('meaning-cloud')


const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(cors())
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
})

//app.get('/test', function (req, res) {
  //  res.send(mockAPIResponse)
//})

app.post('/test' , async function(req,res) {
    const data = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&url=${req.body.url}&lang=en`)

    try{
        const mData = await data.json();
        res.send(mData)
        console.log(mData)
    }catch(error){
        console.log("error" , error)
    }
})
