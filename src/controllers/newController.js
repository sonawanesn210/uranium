const authorModel=require('../models/authorModel')
const bookModel=require('../models/bookModel')


const createNewAuthor=async function(req, res){
    const author=req.body;
    const saveData=await authorModel.create(author)
    res.send({msg:saveData})
}
const createNewBook=async function (req, res){
    const book=req.body;
    const saveData=await bookModel.create(book)
    res.send({msg:saveData})
}
const allBooks=async function (req, res){
    const authorDetails=await authorModel.find({author_name:"Chetan Bhagat"})
    const id = authorDetails[0].author_id
    const bookName=await bookModel.find({author_id:id}).select({name:1})
    res.send({msg:bookName})
}
const updateBookPrice=async function (req, res){
    const bookDetails=await bookModel.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const authorName=await authorModel.find({author_id:id}).select({author_name:1,_id:0})
    const bookName =bookDetails[0].name
    const updatePrice =await bookModel.findOneAndUpdate({name:bookName},{price:100},{new:true}).select({price:1,_id:0})
    res.send({msg:authorName,updatePrice})
}

const authorName=async function(req,res){
    const booksId=await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1, _id:0})
    const id = booksId.map(x=>x.author_id)

    let temp =[]
    for(let i=0;i<id.length;i++){
        let y = id[i]
        const author =await authorModel.find({author_id:y}).select({author_name:1,_id:0})
        temp.push(author)
    }
    const authorName=temp.flat()
    res.send({msg:authorName})
}
module.exports.createNewAuthor=createNewAuthor
module.exports.createNewBook=createNewBook
module.exports.allBooks=allBooks
module.exports.updateBookPrice=updateBookPrice
module.exports.authorName=authorName