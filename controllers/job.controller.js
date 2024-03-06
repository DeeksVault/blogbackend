const Job = require("../models/job.model");


const addJob = async (req, res) => {

    try {
        const newJob = new Job({
            title:req.body.title,
            companyname:req.body.companyname,
            aboutcompany:req.body.aboutcompany,
            jobdescription:req.body.jobdescription,
            eligiblebatches:req.body.eligiblebatches,
            applylink:req.body.applylink
        });
        console.log(newJob);
        const savedjob = await newJob.save();
        res.status(201).json(savedjob);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "error occured while creatinng user" });
    }
}

const getAllJobs = async(req , res)=>{
    try{
        const jobs = await Job.find({});
        if(jobs.length>0){
            res.status(200).json(jobs);
        }
        else{
            res.status(200).json({message:"No jobs are posted"});
        }
    }
    catch(err){
        res.status(500).json({message:"Error occured while fetching jobs"});
    }
}

const getJob = async(req , res)=>{
    try{
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(job){
            res.status(200).json(job);
        }
        else{
            res.status(200).json({message:"No job found with requessted Id"});
        }
    }
    catch(err){
        res.status(500).json({message:"Error occured while fetching job"});
    }
}

module.exports = {addJob , getAllJobs , getJob}