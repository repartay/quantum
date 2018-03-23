module.exports = (app) => {
	app.get('/api/session', async (req, res,next) => {
		res.locals.connection.query('SELECT * from session', (error, results, fields) => {
			if (error) throw error;
			console.log(res);
			res.send(JSON.stringify({"status": 200, "error": null, "response": results }));
		});
	});
};