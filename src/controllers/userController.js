const req = require("express/lib/request")
const productModel = require("../models/productModel")

const UserModel= require("../models/userModel")

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















