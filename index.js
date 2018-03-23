const express = require('express');
const mysql = require('mysql');

const app = express();

app.use((req, res, next) => {
	res.locals.connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'qm_db'
});
	res.locals.connection.connect();
	next();
});

require('./routes/fetch')(app);

app.listen(5000, () => {
	console.log('Server running on http://localhost:5000');
});