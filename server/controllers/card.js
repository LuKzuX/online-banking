import { User } from "../models/userSchema.js";
import { Card } from "../models/cardSchema.js";

export const getUserCards = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const cards = await Card.find({ createdBy: _id });
    res.send(cards);
  } catch (error) {
    res.send(error);
  }
};

export const getUserSingleCard = async (req, res, next) => {
  try {
    const {id} = req.params
    const card = await Card.findById(id)
    res.send(card)
  } catch (error) {
    res.send(error)
  }
}

export const createCard = async (req, res, next) => {
  const securityCode = Math.floor(Math.random() * (999 - 10) + 10);
  try {
    const { _id } = req.user.user;
    const { isCredit } = req.body;
    const user = await User.findById(_id);
    const cards = await Card.find();
    const cardsCreatedByUser = [];
    const sameTypeCards = [];
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].createdBy.toString() == _id) {
        cardsCreatedByUser.push(_id);
      }
    }
    if (cardsCreatedByUser.length >= 2) {
      return res.send("only 2 cards per user");
    }

    for (let j = 0; j < cards.length; j++) {
      if (cards[j].createdBy.toString() == _id || sameTypeCards.length > 0) {
        sameTypeCards.push(cards[j].isCredit);
        if (sameTypeCards[0] == isCredit) {
          return res.send("only one type of card per user");
        }
      }
    }

    const newCard = await Card.create({
      createdBy: user._id,
      cardNumber: "92371203879122", //create function to generate random string
      cardHolder: user.username,
      isCredit: isCredit,
      expiresIn: Date.now(),
      securityCode: securityCode,
    });
    res.send(newCard);
  } catch (error) {
    res.send(error);
  }
};

export const updateCard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const card = await Card.findByIdAndUpdate(id, {
      $set: { cardNumber: 191172, expiresIn: Date.now() },
    }); //boilerplate
    res.send(card);
  } catch (error) {
    res.send(error);
  }
};

export const deleteCard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCard = await Card.findByIdAndDelete(id);
    res.send("deleted with success");
  } catch (error) {
    res.send(error);
  }
};
