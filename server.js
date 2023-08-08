const express = require("express");

const app = express();

const amount = 100

app.get('/greeting',(req, res)=>
{
    res.send(`<h2>You're finally awake! Walked right into that Imperial ambush.</h2>`)
})

app.get('/greeting/:name',(req, res)=>
{
    res.send(`<h2>${req.params.name} is your name? Alright, well follow me!</h2>`)
})

app.get('/tip',(req, res)=>
{
    res.send(`${amount}`)
})

app.listen("3000", (req, res) => {
    console.log(`Server Listening on Port 3000`);
    });

