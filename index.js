// import express from 'express'; 
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// import todoRoute from './route/todo.route.js';

// const app = express()

// dotenv.config()
// const PORT =process.env.PORT || 4002
// const DB_URI = process.env.MONGODB_URI 

// // connect to MongoDB
// try {
//   await mongoose.connect(DB_URI)
//   console.log('MongoDB connected')
  
// } catch (error) {
//   console.log(error)
  
// }

// // route
// app.use(express.json())
// app.use("/todo", todoRoute)




// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`)
// })




// new
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todoRoute from "../backend/route/todo.route.js";
import userRoute from "../backend/route/user.route.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 4002;
const DB_URI = process.env.MONGODB_URI;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"], // Add other headers you want to allow here.
  })
);

// Database connection code
try {
  await mongoose.connect(DB_URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}

// routes
app.use("/todo", todoRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});