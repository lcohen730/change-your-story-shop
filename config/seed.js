require('dotenv').config();
require('./database');

const Item = require('../models/item');

(async function() {
  
    await Item.deleteMany({});
    const items = await Item.create([
        {   
            name: 'Change Your Story T-Shirt',
            /* img: "https://i.imgur.com/1QQlGnz.png", */
            img: "https://i.imgur.com/LsGJIX5.jpg",
            price: 29.99 
        },
        {   
            name: 'Canvas Bag with Logo',
            img: "https://i.imgur.com/e03G811.png",
            price: 24.99 
        },
        {   
            name: 'Charm Bracelet with Flower',
            /* img: "https://i.imgur.com/I1A8fDg.png", */
            img: "https://i.imgur.com/DxYYPrQ.jpg",
            price: 14.99 
        },
        {   
            name: 'Mug',
            img: "https://i.imgur.com/I1A8fDg.png",
            price: 29.99 
        },
        {   
            name: 'Charm Bracelet with Inspirational Message',
            img: "https://i.imgur.com/b684K1v.jpg",
            price: 14.99 
        },
    ]);
  
    console.log(items)
  
    process.exit();
  
  })();