const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose")

dotenv.config();


const userRouter = require("./routes/user.router");
const jobRouter = require("./routes/job.router");
// const jobApplyRoute = require("./router/jobapply.router");

const connectDB = require("./config/dbconfig")

const app = express();
const port = 6000;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/",(req , res)=>{
    res.json({message:"hi"})
})

app.use("/api/user" , userRouter);
app.use("/api/jobs" , jobRouter)
// app.use("/api/applyjob" , jobApplyRoute)

mongoose.connection.once("open" , ()=>{
    console.log("connected to db");
    app.listen(process.env.PORT || port , ()=>{
        console.log("server up and running");
    })
})
