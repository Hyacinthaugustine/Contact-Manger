import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env.PORT || PORT, () => {
  console.log(`Go catch the server at PORT ${process.env.PORT || PORT}`);
});
