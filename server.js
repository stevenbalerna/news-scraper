require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

const router = express.Router();

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

const db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(error){
    if (error) {
        console.log(error);
    }
    else{
        console.log("mongoose connection is successful")
    }
});

app.listen(PORT, function(){
    console.log("Hi! We are listening on Port: " + PORT);
});