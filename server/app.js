import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import DashboardData from "./schema.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

dotenv.config();

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const uri = process.env.MONGODB_URI;

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch {
    console.log("Error Occurred");
  }
}
run().catch(console.dir);

//Enabling Cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/dashboard", async (req, res) => {
  let fetchData;
  if (req.query.filter !== undefined && req.query.search !== undefined) {
    const filterData = req.query.filter;
    const searchData = req.query.search;
    const searchQuery = { [filterData]: searchData };
    console.log(searchQuery);
    fetchData = await DashboardData.find(searchQuery);
  } else {
    fetchData = await DashboardData.find({});
  }
  res.send(fetchData);
});
app.listen(port, () => {
  console.log("listening on port 3000...");
});
