require('dotenv').config();
require('./database');

const Item = require('../models/item');

(async function() {
  
    await Item.deleteMany({});
    const items = await Item.create([
        {   
            name: 'Test Item 1',
            img: "https://i.imgur.com/I1A8fDg.png",
            price: 1.00 
        },
        {   
            name: 'Test Item 2',
            img: "https://i.imgur.com/I1A8fDg.png",
            price: 2.00 
        },
        {   
            name: 'Test Item 3',
            img: "https://i.imgur.com/I1A8fDg.png",
            price: 3.00 
        },
        {   
            name: 'Test Item 4',
            img: "https://i.imgur.com/I1A8fDg.png",
            price: 4.00 
        },
        {   
            name: 'Test Item 5',
            img: "https://i.imgur.com/I1A8fDg.png",
            price: 5.00 
        },
    ]);
  
    console.log(items)
  
    process.exit();
  
  })();