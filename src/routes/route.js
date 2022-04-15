const express = require('express');

const router = express.Router();

/*router.get('/test-me', function (req, res) {
    // let a = { msg: "My first ever API response in JSON !!"} 


    res.send( { msg: "My first ever API response in JSON !!"} )
});



router.get('/test-api1', function (req, res) {

    res.send( "hi FunctionUp " )
});


router.get('/test-api2', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again !"} )
});


router.get('/test-api3', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again..this is another similar api !"} )
});


router.get('/test-api4', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again..this is another similar api ..not I am getting bored!"} )
});


router.get('/test-api5', function (req, res) {

    res.send( { msg: "Hi FUnctionUp" , name:"FunctionUp", age: "100"} )
});



router.get('/test-api6', function (req, res) {

    res.send( {   data: [12, 24, 36, 48, 60]  }   )
});

router.post('/test-post1', function (req, res) {

    res.send( {  msg: "hi guys"  }   )
});


// to send data in  post request-> prefer sending in BODY -> click body-raw-json
router.post('/test-post2', function (req, res) {
    let data= req.body
    console.log(data)
    res.send( {  msg: "hi guys..my 2nd post req"  }   )
});


const randomController= require("../controllers/randomController.js")
//write a post request to accept an element in post request body and add it to the given array and return the new array
router.post('/test-post3', randomController.addToArray ); //HANDLER/CONTROLLER

*/
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
