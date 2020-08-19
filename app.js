var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cookieparser = require('cookie-parser');
var session = require('express-session');



// middleware

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(cookieparser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));



// view engine
app.set("view engine","ejs");

// static file
app.use(express.static('public'));


// routes
app.use(require('./routes/index'));

//database connection
const uri = "mongodb+srv://pramodshah:prime123@cluster0.u2y3i.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("MongoDB Connected...");
    }else{
        console.log(err);
    }
});

// server listening on port 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT,(req,res)=>{
    console.log("Server running on port : ",PORT);
}); 

// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin https://github.com/pramodshah/MovieApp.git
// git push -u origin master