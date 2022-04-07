const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    //console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});

router.get('/movies', function(req,res){
    let arr =["Rang de Basanti","The Shining","Incendies","Finding Nemo","Lord of the Rings"]
    console.log("Name of the movies")
    res.send(arr)
})

router.get('/movies/:indexNumber', function(req,res){
    const arr1=["Rang de Basanti","The Shining","Incendies","Finding Nemo","Lord of the Rings"]
 const indexnum=req.params.indexNumber
   //res.send(arr1[indexnum]) 
   if(indexnum<arr1.length){
       res.send(arr1[indexnum])
   }else{
       res.send("Use valid index")
   }
})

router.get('/films', function(req,res){
    const arr3 =[
        {
        "id":1,
        "name":"The Shining"
    } ,
    { "id":2,
    "name":"Incendies"
   },
   { "id":3,
    "name":"Incendies"
   },
   { "id":4,
    "name":"Incendies"
   
    }]
    res.send(arr3)
});

router.get('/films/:filmId', function(req,res){
    const arr4 =[
        {
        "id":1,
        "name":"The Shining"
    } ,
    { "id":2,
    "name":"Incendies"
   },
   { "id":3,
    "name":"Incendies"
   },
   { "id":4,
    "name":"Incendies"
   
    }]
    const filmid=req.params.filmId
    if(filmid<arr4.length){
    res.send(arr4[filmid])
    }else{
        res.send("No movie exists with this id")
    }
});








module.exports = router;
// adding this comment for no reason