const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
/*const commonMW = require ("../middlewares/commonMiddlewares")


router.get("/middleware1",commonMW.middleware,UserController.API1)
router.get("/middleware2",commonMW.middleware,UserController.API2)
router.get("/middleware3",commonMW.middleware,UserController.API3)
router.get("/middleware4",commonMW.middleware,UserController.API4)
*/

router.get("/middleware1",UserController.API1)
router.get("/middleware2",UserController.API2)
router.get("/middleware3",UserController.API3)
router.get("/middleware4",UserController.API4)
module.exports = router;
