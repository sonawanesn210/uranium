const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const publisherController = require('../controllers/publisherController')
const bookController= require("../controllers/bookController");
const { route } = require('express/lib/application');
const batchController=require("../controllers/batchController")
const developerController=require("../controllers/developerController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post('/createPublisher', publisherController.createPublisher)

router.post("/createBook", bookController.createBook  )

router.get('/get-all-books', bookController.fetchbooks)

router.put('/books', bookController.updateBooks)

//new assignment
router.post('/batches',batchController.createBatch)
router.post('/developers',developerController.createDeveloper)
router.get('/scholarship-developers',developerController.getScholarship)
router.get('/list',developerController.listOfEligibleDevelopers)
router.get('/getDevelopers',developerController.getDeveloper)
module.exports = router;