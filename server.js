var express = require('express')
var mongoose = require('mongoose')
var assert = require('assert')
var bodyParser = require('body-parser')
var expressHbs = require('express-handlebars')
var app = express()
var dummyData = require('./dummyData')
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

function dummyData() {
  Item.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const description1 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' 

    const item1 = new Item({ name: 'Microwave', icon: 'https://s3.eu-central-1.amazonaws.com/minidini/images/icons/icon_microwave-white.svg', category: 'Household Appliance', description: description1 })

    Item.create([item1], (error) => {
      if (!error) {
        console.log(ready)
      }
    })
  })
}

app.get('/', function(req, res) {
  Item.find({}, function(err, items) {
    res.render('inventory', { title: 'MiniDini – Inventory', items: items })
    if (err) throw err
  })
})

app.get('/inventory', function(req, res) {
  res.redirect('/')
})

app.get('/items/create', function(req, res) {
  res.render('itemsCreate', { title: 'MiniDini – Add a new item' })
})

app.get('/household', function(req, res) {
  res.render('household', { title: 'MiniDini – Household' })
})

app.get('/overview', function(req, res) {
  res.render('overview', { title: 'MiniDini – Overview' })
})

app.post('/items/create', function(req, res) {
  item = new Item
  item.name = req.body.itemName
  item.save(function(err) {})

  res.redirect('/')
})

// app.get('/items/id/update', function(req, res) {
// })
//
// app.get('/items/id/delete', function(req, res) {
// })

app.listen(3000, () => console.log('app listening on port 3000'))
