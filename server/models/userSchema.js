import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  contacts: [{type: Object, ref: 'User'}],
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
