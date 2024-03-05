const { verifyuser } = require("../middleware/verifyuser");
const userAppliedModel = require("../models/jobapply.model");



router.route("/" , verifyuser , async (req , res)=>{
    try{
        const {userId , jobs , jobId} = req.body;

        if(userAppliedModel.find({userId}==null)){
            const newApply = userAppliedModel({
                userId:userId,
                jobs:jobs.push(jobId)
            })
        }
        const newApply = userAppliedModel({
            userId:userId,
            jobs:jobs.push(jobId)
        })
        const savedJob = await newApply.save();
        
    }
    catch(err){
        
    }
})