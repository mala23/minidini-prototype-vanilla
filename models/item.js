var mongoose = require('mongoose')
var Schema = mongoose.Schema

var itemSchema = new Schema ({
  name: { type: 'String', required: true },
  description: { type: 'String', required: true },
  icon: { type: 'String' },
  date: { type: 'Date', default: Date.now },
  value: { type: 'String', required: true },
  category: { type: 'String', required: true },
  impairment: { type: 'Boolean', default: false },
})

var Item = mongoose.model('Item', itemSchema)

module.exports = Item
