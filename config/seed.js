require('dotenv').config();
require('./database');

const Item = require('../models/item');

(async function() {
  
    await Item.deleteMany({});
    const items = await Item.create([
        {   
            name: 'Test Item 1',
            price: 1.00 
        },
        {   
            name: 'Test Item 2',
            price: 2.00 
        },
        {   
            name: 'Test Item 3',
            price: 3.00 
        },
        {   
            name: 'Test Item 4',
            price: 4.00 
        },
        {   
            name: 'Test Item 5',
            price: 5.00 
        },
    ]);
  
    console.log(items)
  
    process.exit();
  
  })();