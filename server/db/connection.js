import mongoose from "mongoose"

export const connection = (url) => {
  mongoose.set("strictQuery", false)
  return mongoose.connect(url)
}
