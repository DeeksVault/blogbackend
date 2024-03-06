const userAppliedModel = require("../models/jobapply.model");



const jobapply = async (req , res)=>{
    const {userId , jobId} = req.body;
    try{
        if(userAppliedModel.find(userId)!=null){
            const jobs = userAppliedModel.find(userId).jobs;
            const newApply = userAppliedModel({
                userId:userId,
                jobs:jobs.push(jobId)
            })
            const savedJob = await newApply.save();

            res.status(200).json(savedJob);
        }
        else{
            const jobs = [jobId];
            const newApply = userAppliedModel({
                userId:userId,
                jobs:jobs
            })
            const savedJob = await newApply.save();
            res.status(200).json(savedJob);
        } 
    }
    catch(err){
        console.log(error);
        res.status(500).json({message:"error occured while applying to job"})
    }
}

module.exports= jobapply