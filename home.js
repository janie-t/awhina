var express = require('express')
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
 response.render('awhinaIndex') //once the /cats route has been requested, the callback function renders, or produces, the catsIndex page. It also uses the info inside the data variable set at the top of the page.
})

app.get('/home/how', function(request, response) {
 response.render('awhinaHow') //once the /cats route has been requested, the callback function renders, or produces, the catsIndex page. It also uses the info inside the data variable set at the top of the page.
})

app.get('/home/laugh', function(request, response) {
 response.render('awhinaLaugh', data) //if the parameter of /new is included in the request, the catsNew page is rendered
})

// app.get('/cats/:id', function(request,response){
//   var cats = data.cats
//   var thisCat = cats.find(function(cat){
//     return cat.id === Number(request.params.id)
//   })
//   console.log(thisCat)
//
//   response.render('catsShow', thisCat)
// })
//
// app.post('/cats', function(request,response) {
//   console.log(request.body);
// })

module.exports = app;
