const express= require('express');
const app= express();
const cors = require('cors');
const mongoose = require('mongoose');
const https = require("https");
const { json } = require('body-parser');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());



app.get('/',(req,res)=>{

// res.send('I am working muhahaha');
res.send("hello new file");
});




app.listen(5000,()=>{console.log("Listening on port 5000")});