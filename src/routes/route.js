const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController=require("../controllers/weatherController")
const memesController=require("../controllers/memesController")
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getByDistrict",CowinController.getByDistrict)
router.get("/weather",weatherController.getWeather)
router.get("/getMemes",memesController.getMemesList)
router.post("/getMemesId",memesController.getMemesId)
router.get("/sort",weatherController.getSortBy)
router.get("/getByTemp",weatherController.getByTemp)
module.exports = router;