const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000
const MONGOURL = process.env.MONGO_URL

mongoose
  .connect(MONGOURL)
  .then(()=>{
    console.log("Database is connected successfully");
    app.listen(PORT, ()=>{
        console.log(`Running server on port ${PORT}`);
    });
  })
.catch(error=>console.log(error));
