const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
/* const payCtrl = require('../../src/components/api/pay.mjs'); */
const payCtrl = import('../../src/components/api/pay.mjs');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/checkout
/* router.post('/cart/checkout', ordersCtrl.checkout); */
/* router.post('/cart/checkout', ordersCtrl.checkout, payCtrl.handler); */
/* router.post('/cart/checkout', payCtrl.handler); */
router.post('/cart/checkout', function(req, res) {
    payCtrl.handler
});
// POST /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);

module.exports = router;