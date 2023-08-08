const express = require("express");

const app = express();

app.get('/greeting',(req, res)=>
{
    res.send(`<h2>You're finally awake! Walked right into that Imperial ambush.</h2>`)
})

app.get('/greeting/:name',(req, res)=>
{
    res.send(`<h2>${req.params.name} is your name? Alright, well follow me!</h2>`)
})

app.get('/tip/:amount/:percent',(req, res)=>
{
    res.send(`$${req.params.amount} is the amount. ${req.params.percent}% is the tip. Expected tip is $${req.params.amount * req.params.percent/100}`);
})

app.listen("3000", (req, res) => {
    console.log(`Server Listening on Port 3000`);
    });

