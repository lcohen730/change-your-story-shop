const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

app.use(express.json()); // req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
});
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public', 'img', 'logo.png')));
app.use(express.static(path.join(__dirname, 'public')));
// Check if token and create req.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/items', require('./routes/api/items'));
app.use('/api/orders', require('./routes/api/orders'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

module.exports = app