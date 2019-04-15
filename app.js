const Express = require('express');
const app = new Express();

app.get('/getNumber', (req, res) => {
    res.send(JSON.stringify({ a: 2 }));
});

module.exports = app;
