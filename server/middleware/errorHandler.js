import mongoose from "mongoose"

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof mongoose.Error.ValidationError) {
    let errors = {}
    Object.keys(err.errors).forEach((key) => {
      errors[key] = err.errors[key].message 
    })
    res.send(err)
  }
  if (err.code == 11000) {
    return res.send(`This ${Object.keys(err.keyValue)} already exists`)
  }
  else{
    console.log(err);
    return res.send(err)
  }
}