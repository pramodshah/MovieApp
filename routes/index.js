var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');


router.get('/',(req,res)=>{
    fetch('http://www.omdbapi.com/?s=batman&apikey=9d0e7859')
    .then(res => res.json())
    .then(json => {
        var result = [];
        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });
        console.log(result);
        res.render('index',{movies:result});
    });
    
    
});

// router.get('/movie/:title',(req,res)=>{
//     var title = req.params.title;
//     fetch('http://www.omdbapi.com/?t=titled&apikey=9d0e7859')
//     .then(res => res.json())
//     .then(json => {
//         console.log(json);
//         res.render('index',{data:json});
//     });

// })


    






module.exports = router;
