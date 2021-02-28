var path = require('path')
const express = require('express')
const cors = require('cors')
const node = require('node-fetch')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv').config();
const apikey = process.env.API_KEY
const meaningCloud = require('meaning-cloud')

const api_url = `https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&url=${req.body.url}&lang=en`
let response = await fetch(api_url)
let data = await response.json()

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
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

