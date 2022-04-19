
const API1=async function(req,res){
    res.send({msg:"My first middleware api"})
}

const API2=async function(req,res){
    res.send({msg:"My second middleware api"})
}
const API3=async function(req,res){
    res.send({msg:"My third middleware api"})
}
const API4=async function(req,res){
    res.send({msg:"My fourth middleware api"})
}

module.exports.API1=API1
module.exports.API2=API2
module.exports.API3=API3
module.exports.API4=API4