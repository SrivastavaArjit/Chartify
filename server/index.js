import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import DashboardData from "./schema.js";
import dotenv from "dotenv";
import serverless from "serverless-http";

dotenv.config();

const app = express();
// const port = 3000;

const uri = process.env.MONGODB_URI;
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

let isConnected = false;

async function connectDB() {
  if(isConnected) return;
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    isConnected = true;
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.error("MongoDB Connection Error Occurred", err);
  }
}

//Enabling Cors
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://chartify-client.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/dashboard", async (req, res) => {
  // const fetchData = await DashboardData.find({});
  try{
    await connectDB();
    const data = await DashboardData.find({});
    res.status(200).json(data);
  }catch(err){
    res.status(500).json({error: "Failed to fetch dashboard data"});
  }
});
// app.listen(port, () => {
//   console.log("listening on port 3000...");
// });
export default serverless(app);
