const moment=require("moment")
const middleware=function(req,res,next){
    let timestamps=moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(`${timestamps},${req.socket.remoteAddress},${req.route.path}`)
    next()
    
}


module.exports.middleware=middleware









