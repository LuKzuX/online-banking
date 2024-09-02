import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connection } from "../db/connection.js";
import { router } from "../routes/routes.js";
import { errorHandlerMiddleware } from "../middleware/errorHandler.js";
import bodyParser from "body-parser";
import { createServer } from 'vercel-node-server';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/bank', router);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connection(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

start();

export default createServer(app);  // Vercel expects this export
