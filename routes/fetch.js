module.exports = (app) => {
	app.post('/api/session', async (req, res,next) => {
		console.log('----req-----',req.body.data);
		const dataLength = req.body.data.length;
		console.log('datalength', dataLength);
		// console.log('-----resp---', res);
		res.locals.connection.query('SELECT * from session', (error, results, fields) => {
			if (error) throw error;
			// console.log(res);
			res.send(JSON.stringify({"status": 200, "error": null, "response": results }));
		});
	});
};