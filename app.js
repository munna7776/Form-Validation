const express=require("express");
const path=require("path");
const app=express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/formDetails', {useNewUrlParser: true, useUnifiedTopology: true} );
const bodyparser=require("body-parser");  // we did not use body-parser in this website
const port=8000;

const formSchema = new mongoose.Schema({
    name: String,
    gen: String,
    age: String,
    number: String,
    email: String,
    address: String,
    info: String,
  });