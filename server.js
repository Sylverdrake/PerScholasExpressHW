const express = require("express");

const app = express();

const name = "Carl";

app.get('/greeting',(req, res)=>
{
    res.send(`<h2>${name}! You're finally awake! Walked right into that Imperial ambush.</h2>`)
})


app.listen("3000", (req, res) => {
    console.log(`Server Listening on Port 3000`);
    });

