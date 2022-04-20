const mongoose=require('mongoose')
let ObjectId=mongoose.Schema.Types.ObjectId
const moment=require('moment')

const orderSchema=new mongoose.Schema({
userId:{
    type:ObjectId,
    ref:'newUser'
},
productId:{
    type:ObjectId,
    ref:'newProduct'
},
amount:Number,
isFreeAppUser:Boolean,
  date:Date 
//date:moment().format("DD/MM/YYYY")
},
{timestamps:true});

module.exports=mongoose.model('Order',orderSchema)