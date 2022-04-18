const express = require('express');
const authorController=require("../controllers/refController")
const publisherController= require("../controllers/refController");
const bookController =require("../controllers/refController")
const router = express.Router();





router.post("/createAuthor",authorController.createAuthor)
router.post("/createPublisher",publisherController.createPublisher)
router.post("/createBook",bookController.createBook)
router.get("/getBooksWithAuthorPublisher",bookController.getBooksWithAuthorPublisher)
//router.put("books/:name",bookController.hardCover)
router.put('/books', bookController.updateBooks)

module.exports = router;


/*router.get('/movies', function(req,res){
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



let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
        const data =req.body
    let pt =0
    for(let i=0;i<players.length;i++){
        if(players[i].name===data.name)
        return res.send({msg:"Already exist in list",Players:players})
    }
    players.push(data)
    res.send(players)
      
    
       res.send(  { data: players , status: true }  )

   })

module.exports = router;
*/
