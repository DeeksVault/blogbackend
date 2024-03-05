const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose")

dotenv.config();


const userRouter = require("./routes/user.router")
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



mongoose.connection.once("open" , ()=>{
    console.log("connected to db");
    app.listen(process.env.PORT || port , ()=>{
        console.log("server up and running");
    })
})
