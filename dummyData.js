var Item = require('./models/item')

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

dummyData()
