const Express = require('express');
const mysql = require('mysql');

const app = new Express();

const connection = mysql.createConnection({
    host: 'localhost',
    password: process.env.DB_PASSWORD,
    database: 'book_shop',
    user: process.env.DB_USER
});

console.log(process.env);
connection.connect();

app.use(Express.static('react-app-front-end/build'));

app.get('/getcustomers', (req, res) => {
    connection.query('select * from customers;', (error, data) => {
        res.send(JSON.stringify({ data }));
    });
});

module.exports = app;
