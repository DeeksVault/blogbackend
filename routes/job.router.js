const express = require("express");
const Job = require("../models/job.model");
const {verifyuser , verifyusertoAddJob} = require("../middleware/verifyuser");
const { addJob, getAllJobs, getJob } = require("../controllers/job.controller");


const router = express.Router();

router.route("/addjob").post(verifyuser , addJob)

router.route("/alljobs").get(verifyuser , getAllJobs)

router.route("/:id").get(verifyuser , getJob)

module.exports = router;