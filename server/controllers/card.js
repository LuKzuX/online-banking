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

    const generateCardNumber = () => {
      let cardNumber = ""
      for (let i = 0; i < 16; i++) {
        const number = Math.floor(Math.random() * 10)
        cardNumber += number.toString()
      }
      return cardNumber
    }

    const newCard = await Card.create({
      createdBy: user._id,
      cardNumber: generateCardNumber(), //create function to generate random string
      cardHolder: user.username,
      isCredit: isCredit,
      isActive: true, 
      expiresIn: Date.now(),
      securityCode: securityCode,
    });
    res.send(newCard);
  } catch (error) {
    res.send(error);
  }
};

export const changeCardStatus = async (req, res, next) => {
  try {
    const {id} = req.params
    const card = await Card.findById(id)
    if (card.isActive == true) {
      card.isActive = false
      card.save()
    }else{
      card.isActive = true
      card.save()
    }
    res.send(card)
  } catch (error) {
    res.send(error)
  }
}

export const deleteCard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCard = await Card.findByIdAndDelete(id);
    res.send("deleted with success");
  } catch (error) {
    res.send(error);
  }
};
