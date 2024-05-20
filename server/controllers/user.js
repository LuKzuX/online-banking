import { User } from "../models/userSchema.js"
import jwt from "jsonwebtoken"

export const createUser = async (req, res, next) => {
  try {
    const { username, password, phone } = req.body
    const newUser = await User.create({
      username,
      password,
      phone,
      balance: 0,
      contacts: [],
      isAdmin: false,
    })
    res.json(newUser)
  } catch (error) {
    next(error)
  }
}

export const loginUser = async (req, res) => {
  try {
    const {username, password, phone} = req.body
    const user = await User.findOne({username})
    if (!user) {
      return res.status(401).send("this user does not exist")
    }
    const token = jwt.sign({user}, process.env.SECRET)
    return res.json(token)
  } catch (error) {
    return res.status(401).send(error)
  }
}

export const protectedd = async (req, res, next) => {
  try {
    const { _id } = req.user
    const user = await User.findById({_id})
    res.send(user)
  } catch (error) {
    next(error)
  }
}


