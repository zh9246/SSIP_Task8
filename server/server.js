const express=require('express');
const dotenv = require('dotenv')
const connect =require('./config/config')
require('colors');
const morgan = require('morgan');


dotenv.config()

connect()

const app=express()

app.use(express.json());
app.use(morgan('dev'));


app.use("/api/pizzas", require("./Route/pizzaroute"));
app.get("/",(req,res)=>{
    res.send('Hello World');
});
const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
});
