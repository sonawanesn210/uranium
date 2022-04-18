const authorModel=require('../models/authorModel1')
const publisherModel=require('../models/publisherModel1')
const bookModel=require('../models/bookModel1')

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const createPublisher= async function (req, res) {
    let data= req.body
    let Data= await publisherModel.create(data)
    res.send({msg: Data})
}

const createBook= async function (req, res) {
    let book= req.body

    if(book.author==null || book.publisher==null){
        res.send({Error:"All Details Are Required"})
    }else{
        let author1= await authorModel.find().select({_id:1})
        let publisher1= await publisherModel.find().select({_id:1})


        for(let i=0;i<author1.length;i++){
            let x=author1[i]._id==book.author
            if(x){
                for(let j=0;j<publisher1.length;j++){
                    let y=publisher1[i]._id==book.publisher
                    if(y){
                let newBook= await bookModel.create(book)
             res.send({msg: newBook})
return 
                    }
                }
                res.send({msg:"Publisher not found"})
                return
            }
        }
        res.send({msg:"Author not found"})
    }
   
}

const getBooksWithAuthorPublisher=async function (req, res) {
    let data= req.body
    let getBooks= await bookModel.find().populate('author').populate('publisher')
    res.send({msg:getBooks })
}

/*const hardCover=async function (req, res) {
    let data= req.params.name
    let publisherId= await publisherModel.findOne({name:data}).select({_id:1})
    let updateBook=await bookModel.updateMany({publisher:publisherId},{$set:{isHardCover:true}})

let authorId=await authorModel.find({rating:{$gt:3.5}})
let updatePrice=await bookModel.updateMany({author:authorId},{$inc:{price:10}})

res.send({msg:updateBook,updatePrice})
}
*/

const fetchbooks = async function (req, res) {
    
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}

const updateBooks = async function (req, res) {
    // update hardcover to true for few books
    let hardCOverPublishers = await publisherModel.find({name : {$in:['Penguin','HarperCollins'] }}).select({_id:1})
    let arrayOfPublishers = []
    
    for (let i = 0; i < hardCOverPublishers.length; i++) {
        let objId = hardCOverPublishers[i]._id 
        arrayOfPublishers.push(objId)
    }
    
    let updatePublisher = await bookModel.updateMany({publisher: {$in: arrayOfPublishers}},{isHardCover: true})
     let hardCoverAuthors=await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
     let arrayOfAuthor =[]
     for(let i=0;i<hardCoverAuthors.length;i++){
         let objId1=hardCoverAuthors[i]._id
         arrayOfAuthor.push(objId1)
     }
     let updateAuthor=await bookModel.updateMany({author:{$in:arrayOfAuthor}},{$inc:{price:10}})
    res.send({msg1: updatePublisher,msg2:updateAuthor})
}

module.exports.createAuthor=createAuthor
module.exports.createPublisher=createPublisher
module.exports.createBook=createBook
module.exports.getBooksWithAuthorPublisher=getBooksWithAuthorPublisher
//module.exports.hardCover=hardCover
module.exports.updateBooks = updateBooks
module.exports.fetchbooks=fetchbooks