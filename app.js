const express=require('express');
const { connect } = require('mongoose');
require('dotenv').config()
const db=require('./config/mongoose')
const urlRoute=require('./router/url');
const app=express();
const port=8000;




app.use('/url',urlRoute)

app.listen(port,()=>{
    console.log("Server Started at port at PORT ",port)
})