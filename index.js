const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	// console.log('===+!++++REQUEST====', req);
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