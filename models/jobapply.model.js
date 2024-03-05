const mongoose = require("mongoose");


const userAppliedSchema = new mongoose.Schema({
    userId : {type:String , required:true},
    jobs :{type:Array , required:true}
},
{
    timestamps:true,
}
);

const userAppliedModel = mongoose.model("userAppliedModel" , userAppliedSchema);

module.exports = userAppliedModel;