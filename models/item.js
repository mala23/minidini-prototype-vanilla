var mongoose = require('mongoose')
var Schema = mongoose.Schema

var itemSchema = new Schema ({
  name: { type: 'String', required: true },
  description: { type: 'String', required: true },
  icon: { type: 'String', required: true },
  dateOfPurchase: { type: 'Date', default: Date.now, required: true },
  purchaseValue: { type: 'String', required: true },
  category: { type: 'String', required: true },
  impairment: { type: 'Boolean', default: false, required: true },
})

var Item = mongoose.model('Item', itemSchema)

module.exports = Item
