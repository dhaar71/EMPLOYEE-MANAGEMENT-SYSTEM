require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const dataroutes = require('./routes/data')


//express app 
const app = express()


//ROUTES
app.use('/',dataroutes)



//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    //listen 
    app.listen(process.env.PORT,()=>{
        console.log("connected to db",process.env.PORT)
    })
  })
  .catch((error)=>{
            console.log(error)
        })
