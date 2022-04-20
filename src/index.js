const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment=require("moment")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://sonavanesn1996:Swapnali210@cluster0.ds0ir.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
app.use(
    function(req,res,next){
        let timestamps=moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(`${timestamps},${req.socket.remoteAddress},${req.path}`)
    next()
    }
)


app.use('/', route);

app.listen(process.env.PORT || 2000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 2000))
});
