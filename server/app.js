const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const {connectDatabase, connectionDBStatus, saveToDB} = require('./services/database');
const app = express();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors({origin:"*"}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});


// MongoDB connection
connectDatabase();
connectionDBStatus();

app.get('/user', (req,res) => {
    res.send("user is working")      
})

app.post('/user', async (req,res) => {
    // console.log(req);
    const data = {
        name: req.body.name,
        email: req.body.email
    }
    const result = await saveToDB(data)
    res.send(result);
})

app.listen(4000, ()=>{
    console.log("Listen at 4000");
});