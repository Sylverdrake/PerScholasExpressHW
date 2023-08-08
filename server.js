const express = require("express");

const app = express();

const magicResponses=
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

function getRandom(max) 
{
    return Math.floor(Math.random() * max);
}

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


app.get('/magic/:question',(req, res)=>
{
    res.send(`<h1>Question: <span>${req.params.question}</span></h1>
    <p>${magicResponses[getRandom(0, magicResponses.length)]}</p>`)
})

app.listen("3000", (req, res) => {
    console.log(`Server Listening on Port 3000`);
    });

