var express = require('express')
var handlebars = require('handlebars')
var expresshbs = require('express-handlebars')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

// view engine setup
app.engine('handlebars', expresshbs({defaultLayout: ''}))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//---------------------Ignore above here-------------------//

var data = {url: 'http://thecatapi.com/api/images/get?format=src&type=gif'}

app.get('/', function(request, response) {
 response.redirect('/home') // when users type in localhost:3000 it redirects the user to localhost:3000/home
})

app.get('/home', function(request, response) {
 response.render('awhinaIndex') //once the /home route has been requested, the callback function renders, or produces, the awhinaIndex page. It also uses the info inside the data variable set at the top of the page.
})

app.get('/home/motivate', function(request, response) {
 response.render('awhinaMotivate', data) //if the parameter of /motivate is included in the request, the awhinaMotivate page is rendered
})

app.get('/home/emotion', function(request, response) {
 response.render('awhinaEmotion', data) //if the parameter of /emotion is included in the request, the awhinaEmotion page is rendered
})

app.get('/home/study', function(request, response) {
 response.render('awhinaStudy', data) //if the parameter of /study is included in the request, the awhinaStudy page is rendered
})

app.get('/home/laugh', function(request, response) {
 response.render('awhinaLaugh', data) //if the parameter of /laugh is included in the request, the awhinaLaugh page is rendered
})

app.get('/home/fitness', function(request, response) {
 response.render('awhinaFitness', data) //if the parameter of /fitness is included in the request, the awhinaFitness page is rendered
})

app.get('/home/sadness', function(request, response) {
 response.render('awhinaSadness', data) //if the parameter of /sadness is included in the request, the awhinaSadness page is rendered
})

app.get('/home/bullying', function(request, response) {
 response.render('awhinaBullying', data) //if the parameter of /bullying is included in the request, the awhinaBullying page is rendered
})

app.get('/home/drugs', function(request, response) {
 response.render('awhinaDrugs', data) //if the parameter of /drugs is included in the request, the awhinaDrugs page is rendered
})

app.get('/home/peers', function(request, response) {
 response.render('awhinaPeers', data) //if the parameter of /peers is included in the request, the awhinaPeers page is rendered
})

app.get('/home/socialmedia', function(request, response) {
 response.render('awhinaSocialmedia', data) //if the parameter of /socialmedia is included in the request, the awhinaSocialmedia page is rendered
})

module.exports = app;
