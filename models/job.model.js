const mongoose = require("mongoose");


const jobSchema = new mongoose.Schema({
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

const Job = mongoose.model("Job" , jobSchema);

module.exports = Job;