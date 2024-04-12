import express from "express";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connectToMongoDB.js";
// import connectToMongoDb from "./db/connectToMongoDB";
// import connectToMongoDB from "./db/connectToMongoDB";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server running on port ${PORT}`);
});
