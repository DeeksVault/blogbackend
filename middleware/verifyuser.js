const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");


const verifyuser = (req , res , next)=>{
    const accesstoken = req.header.authorization;

    if(accesstoken){
        jwt.verify(accesstoken , process.env.ACCESS_TOKEN , (err , user)=>{
            if(err)  res.status(403).json({message:"Invalid token"});
            req.user = user;
            next();
        })
    }
}

const verifyusertoAddJob = (req , res , next)=>{
    const accesstoken = req.header.authorization;

    if(accesstoken){
        jwt.verify(accesstoken , process.env.ACCESS_TOKEN , (err , user)=>{
            if(err)  res.status(403).json({message:"Invalid token"});
            req.user = user;
            if(user.email!="annedeekshith@gmail.com");{
                res.status(403).json({message:"Permisson Denied to add Job"})
            }
            next();
        })
    }
}
module.exports = {verifyuser , verifyusertoAddJob}