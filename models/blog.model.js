const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    title:{type:String , required:true},
    companyname:{type:String , required:true},
    aboutcompany:{type:String , required:true},
    jobdescription:{type:String , required:true},
    eligiblebatches:{type:Array , required:true},
    applylink:{type:String , required:true}
},
{
    timestamps:true,
}
);

const User = mongoose.model("User" , userSchema);

module.exports = User;