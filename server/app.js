import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { connection } from "./db/connection.js"
const app = express()
import { router } from "./routes/routes.js"
import { errorHandlerMiddleware } from "./middleware/errorHandler.js"
import bodyParser from "body-parser"

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
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
