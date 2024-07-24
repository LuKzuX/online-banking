import { User } from "../models/userSchema.js";
import { Card } from "../models/cardSchema.js";

export const getAllCardInfo = async (req, res, next) => {
  try {
    const cards = await Card.find()
    res.send(cards)
  } catch (error) {
    res.send(error)
  }
}

export const getCardInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userCards = await Card.findById(id);
    res.send(userCards);
  } catch (error) {
    res.send(error);
  }
};
export const createCard = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const user = await User.findById(_id);
    const newCard = await Card.create({
      createdBy: user._id,
      cardNumber: "92371203871230",
      cardHolder: user.username,
      expiresIn: Date.now(),
      securityCode: "29",
    });
    res.send(newCard);
  } catch (error) {
    res.send(error);
  }
};
