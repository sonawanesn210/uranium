const jwt = require("jsonwebtoken");
//const userModel = require("../models/userModel");

const authenticate = function (req, res, next) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
 
   
    let decodedToken = jwt.verify(token, "functionup-uranium")
    req["decodedToken"]=decodedToken
    if(!decodedToken) return res.send({ status: false, msg: "token is invalid"})
    next()
  }
  

const authorise = function (req, res, next) {

  let userToBeModified = req.params.userId
  //userId for the logged-in user
  let userLoggedIn = req.decodedToken.userId
  //userId comparision to check if the logged-in user is requesting for their own data
  if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  next()


}
 


  


module.exports.authenticate = authenticate;
module.exports.authorise = authorise;