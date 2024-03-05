const User = require("../models/user.model");
const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken")

const signup = async (req , res)=>{
    try{
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password: cryptojs.AES.encrypt(req.body.password , process.env.SECRET_KEY).toString(),
        });
        console.log(newUser);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"error occured while creatinng user"});
    }
}

const login = async (req , res)=>{
    try{
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(401).json({ message: "Incorrect email" });

        const decodedPassword = cryptojs.AES.decrypt(user.password, process.env.SECRET_KEY).toString(cryptojs.enc.Utf8);
        decodedPassword !== req.body.password && res.status(401).json({ message: "Incorrect Password"});

        const { password, ...rest } = user._doc;
        const accessToken = jwt.sign( {username: user.username}, process.env.ACCESS_TOKEN )

        res.json({...rest, accessToken});

    }catch(err){
        console.log(err)
    }
}

module.exports = {signup , login}