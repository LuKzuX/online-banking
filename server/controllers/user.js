import { User } from "../models/userSchema.js";
import { Card } from "../models/cardSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createUser = async (req, res, next) => {
  try {
    const { username, password, phone } = req.body;
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      phone,
      balance: 0,
      contacts: [],
      transactions: [],
      cards: [],
      isAdmin: false,
    });
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password, phone } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send("this user does not exist");
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).send("incorrect password");
    }

    const token = jwt.sign({ user }, process.env.SECRET);
    return res.json({ user, token });
  } catch (error) {
    return res.status(401).send(error);
  }
};

export const getUserInfo = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const user = await User.findById( _id );
    const cards = await Card.find({createdBy: _id})
    res.json({user, cards});
  } catch (error) {
    next(error);
  }
};
