const express = require('express');


const router = express.Router();
const newController=require('../controllers/newController')

router.post('/createNewAuthor',newController.createNewAuthor)
router.post('/createNewBook',newController.createNewBook)
router.get('/allBooks',newController.allBooks)
router.get('/updateBookPrice',newController.updateBookPrice)
router.get('/authorName',newController.authorName)

module.exports = router;
// adding this comment for no reason