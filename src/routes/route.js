const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")

const commonMW = require ("../middlewares/commonMiddlewares")

router.post('/createProduct',UserController.createProduct)
router.post('/createUser1',commonMW.mid1,UserController.createUser1)

router.post('/createOrder',commonMW.mid1,UserController.createOrder)



module.exports = router;