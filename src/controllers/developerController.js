const batchModel = require("../models/batchModel")
const developerModel= require("../models/developerModel")

const createDeveloper= async function (req, res) {
    let developer= req.body
    let developerCreated = await developerModel.create(developer)
    res.send({msg: developerCreated})
}


const listOfEligibleDevelopers= async function(req,res){
    let getList=await developerModel.find().populate(['batch'])
    res.send({msg:getList})
}
const getScholarship= async function(req,res){
    let data=req.body;
   let sc=await developerModel.find({$and:[{gender:"female"},{percentage:{$gte:70}}]})
    res.send({data:sc})
}
const getDeveloper =async function(req,res){
    let percentage=req.query.percentage
    let program=req.query.program

if(!percentage) {
    return res.send({message: "persentage required"})   
}
if(!program) {
    return res.send({message: "program not match"})   
}
const developer=await batchModel.find({name:program}).select({_id:1})
let arrayOfDev=[]
for(let i=0;i<developer.length;i++){
    let objId=developer[i]._id
    arrayOfDev.push(objId)
}
const newBatch=await developerModel.find({batch:{$in:[arrayOfDev]},percentage:{$gte:percentage}})//.populate('batch')
res.send({msg:newBatch})
}

module.exports.createDeveloper= createDeveloper
module.exports.listOfEligibleDevelopers=listOfEligibleDevelopers
module.exports.getScholarship=getScholarship
module.exports.getDeveloper=getDeveloper