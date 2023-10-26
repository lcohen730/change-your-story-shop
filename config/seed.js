require('dotenv').config();
require('./database');

const Item = require('../models/item');

(async function() {
  
    await Item.deleteMany({});
    const items = await Item.create([
        {   
            name: 'T-Shirt',
            img: "https://i.imgur.com/1QQlGnz.png",
            price: 29.99 
        },
        {   
            name: 'Canvas Bag',
            img: "https://i.imgur.com/e03G811.png",
            price: 24.99 
        },
        {   
            name: 'Bracelet',
            img: "https://i.imgur.com/I1A8fDg.png",
            price: 14.99 
        },
        {   
            name: 'Mug',
            img: "https://i.imgur.com/I1A8fDg.png",
            price: 29.99 
        },
    ]);
  
    console.log(items)
  
    process.exit();
  
  })();