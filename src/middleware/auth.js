const jwt = require("jsonwebtoken");

const  mid = function (req, res,next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) 
    return res.send({ status: false, msg: "token must be present" }),
    next();
    
    let decodedToken = jwt.verify(token, "functionup-uranium");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" }),
      next();

    else next();
  };

  module.exports.mid=mid;
