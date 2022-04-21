const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req,res) {

  let data = req.body;
  let savedNewData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg:savedNewData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({status: false,msg: "username or the password is not corerct"});


  let token = jwt.sign(
    {
      userId: user._id.toString(),
       batch: "Uranium",
      organisation: "FUnctionUp",
    },
    "functionup-uranium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};
const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token)
   token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token)
   return res.send({ status: false, msg: "token must be present" });
  console.log(token);
  let decodedToken = await jwt.verify(token, "functionup-uranium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token)
   token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token)
   return res.send({ status: false, msg: "token must be present" });
  
  
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

const deleteUser=async function(req,res){
  let token=req.headers["x-auth-token"];
  if(!token)
  token =req.headers["x-auth-token"];
  if(!token)
  return res.send({status:false,msg:"token must be present"});
  let userId=req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }
  let deleteUser=await userModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true});
  res.send({status:deleteUser,data:deleteUser})
}


module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports. deleteUser= deleteUser
