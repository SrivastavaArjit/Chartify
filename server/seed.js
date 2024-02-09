import mongoose from "mongoose";
import fs from "fs";
import dotenv from "dotenv";
import DashboardData from "./schema.js";

dotenv.config();

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const uri = process.env.MONGODB_URI;

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

const data = fs.readFileSync("jsondata.json", "utf8");
const parseData = JSON.parse(data);

await DashboardData.insertMany(parseData);
