import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: Number,
  },
  balance: {
    type: Number,
  },
  contacts: {
    type: Array,
  },
  isAdmin: {
    type: Boolean,
  },
})

export const User = mongoose.model("Users", userSchema) 
