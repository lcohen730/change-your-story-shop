require('dotenv').config();
require('./config/database');

const app = require('./app-server');

const PORT = 6800;

app.listen(PORT, () => {
	console.log(`Port ${PORT} is up and running.`);
});