
require("./Model/");
const path    = require("path");
const express = require("express");
const ejsMate = require("ejs-mate");


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));
app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


const authRoutes = require("./Routes/auth");


app.use("/",authRoutes);

app.listen("8081",()=>{
    console.log('Listening to PORT 8081');
})

