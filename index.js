
// // new
// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import todoRoute from "./route/todo.route.js";
// import userRoute from "./route/user.route.js";
// import cookieParser from "cookie-parser";
// const app = express();
// dotenv.config();

// const PORT = process.env.PORT || 4002;
// const DB_URI = process.env.MONGODB_URI;

// // middlewares
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: ["Content-Type", "Authorization"], // Add other headers you want to allow here.
//   })
// );

// // Database connection code
// try {
//   await mongoose.connect(DB_URI);
//   console.log("Connected to MongoDB");
// } catch (error) {
//   console.log(error);
// }

// // routes
// app.use("/todo", todoRoute);
// app.use("/user", userRoute);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// new
// index.js

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import todoRoute from "./route/todo.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4002;
const DB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Database connection
try {
  await mongoose.connect(DB_URI);
  console.log("✅ Connected to MongoDB");
} catch (error) {
  console.error("❌ MongoDB connection error:", error);
}

// Routes
app.use("/todo", todoRoute);
app.use("/user", userRoute);

// ✅ Root route to fix "Cannot GET /"
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "✅ Todo backend is running! Weelcome to babar backend",
  });
});

// cookie route
res.cookie("jwt", token, {
  httpOnly: true,
  secure: true,        //  must be true on Render (HTTPS)
  sameSite: "None",    //  must be 'None' for cross-origin cookies
});


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
