import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { connection } from "../server/db/connection.js"
const app = express()
import { router } from "./routes/routes.js"


app.use(express.json())
app.use(`/bank`, router)

const start = async () => {
  try {
    await connection(process.env.MONGO_URL)
    app.listen(5000, () => {
      console.log(`Server is listening`)
    })
  } catch (error) {
    console.log(error)
  }
}

start() 
