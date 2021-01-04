const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')
const mongoose = require('mongoose')

const port = process.env.PORT || 8080

const Post = require('./models/Post.model')
require('dotenv').config()
mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Mongo Connection is success.")
}).catch(error => handleError(error));

const app = express()

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'))


app.get('/', function(req,res){
    res.render('index')
})
app.get('/miningcity', async (req,res) => {
    const post = await Post.findOne({_id: "5ff2e823fc639b57b8c3552b"})
    res.render('miningcity', {post: post})
})
app.get('/btcv', async (req,res) => {
    //const data = await fetch('http://localhost:3000/api/5ff218fb5b4c0d0910ff4c66').then(res => res.json())
    const post = await Post.findOne({_id: "5ff218fb5b4c0d0910ff4c66"})
    res.render('btcv', {post: post})
})
app.get('/elcash', async (req,res) => {
    const post = await Post.findOne({_id: "5ff34e4499abf75ff8c16238"})
    res.render('elcash', {post: post})
})
app.get('/muagoidao', async (req,res) => {
    const post = await Post.findOne({_id: "5ff2e216fc639b57b8c35529"})
    res.render('muagoidao', {post: post})
})
app.get('/sangiaodich', async (req,res) => {
    const post = await Post.findOne({_id: "5ff2df05fc639b57b8c35527"})
    res.render('sangiaodich', {post: post})
})
app.use('/*', function(req,res){
    res.redirect('/')
})

app.listen(port, function() {
    console.log('Listening on port',port)
})