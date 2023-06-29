const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const MONGO_URL = process.env.URL;
app.use(express.json());
const userRoutes = require('./routes/user.routes');


app.use(cors());
app.use("/api",userRoutes);

const start = async()=>{
    try {
        await mongoose.connect(MONGO_URL)
        app.listen(8001,()=>{
            console.log("==> Db & Server Up");
        })
    } catch (error) {
        console.log(error)  
    }
}

start();