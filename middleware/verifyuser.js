const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");


const verifyuser = async (req , res , next)=>{
    const {authorization} = req.headers;
    if(!authorization){
        res.status(400).send({message:"you are not authorized"})
    }
    else if(!authorization.startsWith('Bearer ')){
        res.status(400).send({message:"you are not authorized"})
    }
    console.log(accesstoken);
    // console.log(req);
    // if(accesstoken){
    //     jwt.verify(accesstoken , process.env.ACCESS_TOKEN , (err , user)=>{
    //         if(err)  res.status(403).json({message:"Invalid token"});
    //         req.user = user;
    //         next();
    //     })
    // }
    // else{
    //     res.status(403).json({message:"unable to get access token"})
    // }

    try{
        const token = authorization.split(' ')[1];
    
            try {
              const payload = await jwt.verify(token, process.env.ACCESS_TOKEN);
              if(payload){
                const user = await User.findById(payload.id)
              }
            } catch (error) {
              throw error;
            }
          
          
    }
    catch(err){

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