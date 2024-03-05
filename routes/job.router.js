const express = require("express");
const Job = require("../models/job.model");
const {verifyuser , verifyusertoAddJob} = require("../middleware/verifyuser");
const { addJob, getAllJobs, getJob } = require("../controllers/job.controller");


const router = express.Router();

router.post("/addjob", verifyusertoAddJob , addJob)

router.get("/alljobs" , verifyuser , getAllJobs)

router.get("/job:id"  , verifyuser , getJob)

module.exports = router;