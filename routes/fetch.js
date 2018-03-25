module.exports = (app) => {
  app.post('/api/session', async (req, res, next) => {
    const dataArray = req.body.data;
    const joinedQuery = dataArray.join(' AND ');
    const wholeQuery = `WHERE ${joinedQuery}`;
    console.log('SQL Query:', wholeQuery);
    res.locals.connection.query(`SELECT * from session ${wholeQuery}`, (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, response: results }));
    });
  });
};

