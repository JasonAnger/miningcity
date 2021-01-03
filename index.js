const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')

const port = process.env.PORT || 4000

const app = express()

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'))


app.get('/', function(req,res){
    res.render('index')
})

app.get('/btcv', async (req,res) => {
    const data = await fetch('http://localhost:3000/api/5ff218fb5b4c0d0910ff4c66').then(res => res.json())
    res.render('btcv', {post: data})
})

app.use('/*', function(req,res){
    res.redirect('/')
})

app.listen(port, function() {
    console.log('Listening on port',port)
})