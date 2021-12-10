const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'election'
    },
    console.log('connected to the election database')
);



app.get('/', (req, res) => {
    res.json({
        message: 'Hello Worldddd'
    });
});

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// catch all route. always put at bottom of get routes
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});