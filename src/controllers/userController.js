const req = require("express/lib/request")
const productModel = require("../models/productModel")
//const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")
//const productModel=require("../models/productModel")
const orderModel=require("../models/orderModel")
const userModel = require("../models/userModel")

const createProduct=async function(req,res){
    let data= req.body
    let saveData=await productModel.create(data)
    res.send({data1:saveData})
}


const createUser1= async function(req,res){
let data=req.body
let header=req.headers.isfreeappuser
console.log(data)
console.log(header)
if(header){
    let save=await UserModel.create(data)
    res.send({newData:save})
}
else{
    res.send({errormsg:"missing a mandatory header"})
}
}

const createOrder=async function(req,res){
    let data = req.body
    let userId = data.userId
    let productId = data.productId

    if(!userId) {
        return res.send({message: "user id must be present in the details"})
    }
    let user = await userModel.findById(userId)

    if(!user) {
        return res.send({message: "Not a valid user id"})
    }

    if(!productId) {
        return res.send({message: "product id must be present in the detials"})   
    }

    let products = await productModel.findById(productId)

    if(!products) {
        return res.send({message: "Not a valid product id"})
    }
    let orderCreated = await orderModel.create(data);
    if (req.headers["isfreeappuser"] === "true") {
        await orderModel.updateOne({ userId: data.userId }, { $set: { amount: 0 } },{new:true})
    }
    else {
        let productPrice = productId.price;
        if (userId.balance > productPrice){
            await userModel.updateOne({ _id: data.userId }, { $inc: { balance: productPrice } },{new:true})
            await orderModel.updateOne({ _id:saveData._id }, { $set: { amount: productPrice } },{new:true})
            return res.send({ msg: orderCreated });
        }
        else res.send({msg:"user doesn't have enough balance"})
    } 
     
} 


module.exports.createUser1=createUser1
module.exports.createProduct=createProduct
module.exports.createOrder=createOrder

/*const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)
    //counter
    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    
    }


const createAUser = function(req, res) {
    let requestBody = req.body
    let headers  = req.headers
    

    //Printing all the headers before modification - addition of a new header called 'month'
    console.log('Request headers are before: ', headers)

    //Accessing a request header called 'batch'
    let batchHeader = headers["batch"] // headers.batch 
    
    ///Accessing a request header called 'content-type'
    let contentHeader = headers['content-type'] // headers.content-type

    console.log('Content Type hedser is: ',contentHeader)
    console.log('Batch header is: ', batchHeader)

    //Adding a new requets header
    req.headers["month"] = 'April' //req.headers.month = 'April' or req.headers["month"] = 'April'


    //Printing the headers after modification - addition of a new header called 'month'
    console.log('Request headers are after: ', headers)


    console.log('Request property called current-day', req['current-day'])
    
    //Adding a response header
    res.header('year', '2022')

    res.send('Just create a user')
    module.exports.createAUser = createAUser
module.exports.basicCode = basicCode


const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
}
*/














