const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //3 a)
    if(!authorId) {
        return res.send({message: "Author id must be present in the book detials"})   
    }

    //3 b)
    let author = await authorModel.findById(authorId)

    if(!author) {
        return res.send({message: "Not a valid author id"})
    }

    //3 c)
    if(!publisherId) {
        return res.send({message: "Publihser id must be present in the book details"})
    }

    //3 d)
    let publisher = await publisherModel.findById(publisherId) 

    if(!publisher) {
        return res.send({message: "Not a valid publisher id"})
    }

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

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
    
    //let books = await bookModel.updateMany({publisher: {$in: arrayOfPublishers}},{isHardCover: true})
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

   


module.exports.createBook= createBook
module.exports.fetchbooks = fetchbooks
module.exports.updateBooks = updateBooks

