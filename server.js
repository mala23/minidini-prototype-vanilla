var express = require('express')
var mongoose = require('mongoose')
var assert = require('assert')
var bodyParser = require('body-parser')
var expressHbs = require('express-handlebars')
var app = express()
var Item = require('./models/item')

var index = require('./views/inventory')

var uri = 'mongodb://localhost/minidini'
mongoose.connect(uri)

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({
     extended: false
}))

app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs', partialsDir: 'server/views/partials'}))
app.set('view engine', '.hbs')

app.use(bodyParser.json())
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/', function(req, res) {
  Item.find({}, function(err, items) {
    console.log(items)
    res.render('inventory', { title: 'MiniDini – Inventory', items: items})
    if (err) throw err
  })
})

app.post('/items/create', function(req, res) {
  item = new Item
  item.text = req.body.itemText
  item.save(function(err) {})

  res.redirect('/')
})

// app.get('/items/id/update', function(req, res) {
// })
//
// app.get('/items/id/delete', function(req, res) {
// })

app.listen(3000, () => console.log('app listening on port 3000'))
