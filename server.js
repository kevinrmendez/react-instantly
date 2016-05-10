require('babel-core/register');

var express = require('express')
var app = express()
var morgan = require('morgan')
var path = require('path')
var pug = require('pug')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var components = require('./public/components.js')

var HelloMessage = React.createFactory(components.HelloMessage)

app.set('views', __dirname+'/views');
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))


app.get('/', function (req, res){
  res.render('index', {
    react: ReactDOMServer.renderToString(HelloMessage({ name: "Martin"}))
  })
})

app.use(morgan('dev'))


//public folder
//app.use('/', express.static(__dirname + '/public'));

//set the port for server
var port = process.env.PORT || 3000
app.listen(port)
console.log('Magic happens on port: ' + port)
