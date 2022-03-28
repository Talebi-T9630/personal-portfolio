const express= require('express');
const app= express();
const cors = require('cors');
const mongoose = require('mongoose');
const https = require("https");
const Skills = require('./models/skills');
const { json } = require('body-parser');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());




    const url = "mongodb://localhost:27017/SkillDB";

    app.get("/hello", (req,res)=>{
        res.send("hello world!");
    })
    app.get("/", async (req,res)=>{
        try{
            await mongoose.connect(url);
            console.log("Database connected");
            Skills.find((err, skills)=>{
                if(err){ 
                    console.log(err);
                }else {
                    console.log(skills);
                    res.send(skills);
                    mongoose.connection.close();
                }
            })
        }
        catch(error){
            console.log(error);
        }
    })




// app.listen(5000,()=>{console.log("Listening on port 5000")});
app.listen(process.env.PORT || 5000,()=>{console.log("Listening on port 5000")});