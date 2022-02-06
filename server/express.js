const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "test_app"
});



app.get("/images/imagesbottom", (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log(`connected as id ${connection.threadId}`);

        connection.query("SELECT * FROM images_bottom", (err, rows) => {
            connection.release();
            if(!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });
});

app.get("/images/imagesmiddle", (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log(`connected as id ${connection.threadId}`);

        connection.query("SELECT * FROM images_middle", (err, rows) => {
            connection.release();
            if(!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });
});

app.get("/images/imagestop", (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log(`connected as id ${connection.threadId}`);

        connection.query("SELECT * FROM images_top", (err, rows) => {
            connection.release();
            if(!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });
});

app.get("/socialnetworks", (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log(`connected as id ${connection.threadId}`);

        connection.query("SELECT * FROM socialnetworks", (err, rows) => {
            connection.release();
            if(!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });
});

app.post("/login", (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log(`connected as id ${connection.threadId}`);

        const params = req.body;
        
        connection.query('INSERT INTO users SET ?', params, (err, rows) => {
            connection.release();
            if(!err) {
                res.send(`User's data with the Record Name: ${[params.name]} has been added!`);
            } else {
                console.log(err);
            }
        });
    });
});


app.listen(PORT, () => console.log(`Listen on port ${PORT}`));