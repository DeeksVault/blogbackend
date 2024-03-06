const express = require("express");
const Job = require("../models/job.model");
const {verifyuser , verifyusertoAddJob} = require("../middleware/verifyuser");
const { addJob, getAllJobs, getJob } = require("../controllers/job.controller");


const router = express.Router();

router.route("/addjob").post(addJob)

router.route("/alljobs").get(getAllJobs)

router.route("/:id").get(getJob)

module.exports = router;