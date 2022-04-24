const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const mid = require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId", mid.authenticate, userController.getUserData)

router.put("/users/:userId", mid.authenticate, mid.authorise,userController.updateUser)

router.delete("/users/:userId", mid.authenticate, mid.authorise,userController.deleteUser)
router.post("/users/:userId/posts",mid.authenticate,mid.authorise,userController.postMessage)
module.exports = router;