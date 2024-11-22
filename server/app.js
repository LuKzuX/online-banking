import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { connection } from "./db/connection.js"
const app = express()
import { router } from "./routes/routes.js"
import { errorHandlerMiddleware } from "./middleware/errorHandler.js"
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(`/bank`, router)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connection(process.env.MONGO_URL)
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is listening`)
    })
  } catch (error) {
    console.log(error)
  } 
}


start() 
