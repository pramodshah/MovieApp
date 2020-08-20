var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');


router.get('/',(req,res)=>{
    fetch('http://www.omdbapi.com/?s=action&apikey=9d0e7859')
    .then(res => res.json())
    .then(json => {
        var result = [];
        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });
        res.render('index',{movies:result});
    });
    
    
});

router.get('/genre/:category',(req,res)=>{
    var category = req.params.category;
    var url = "http://www.omdbapi.com/?apikey=9d0e7859&s="+category;
    fetch(url)
    .then(res => res.json())
    .then(json => {
        var result = [];
        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });
        res.render('index',{movies:result});
    });
    
    
});

router.get('/:id',(req,res)=>{
    var id = req.params.id;
    var url = "http://www.omdbapi.com/?apikey=9d0e7859&i=" + id;
    fetch(url)
    .then(res => res.json())
    .then(json => {
        
        res.render('view-movie',{movie:json});
    });
    
    
});

router.post('/search',(req,res)=>{
    var title = req.body.title;
    console.log(title);
    var url = "http://www.omdbapi.com/?apikey=9d0e7859&t="+title;
    fetch(url)
    .then(res => res.json())
    .then(json => {
        res.render('search-result',{movie:json});
    });
    
    
});




module.exports = router;
