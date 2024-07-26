import { User } from "../models/userSchema.js";
import { Card } from "../models/cardSchema.js";
import { Transaction } from "../models/transactionSchema.js";

export const addContact = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const { phone } = req.body;
    const user = await User.findById(_id);
    const contactToAdd = await User.find({ phone });
    user.contacts.push(contactToAdd);
    await user.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

export const payContact = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const { phone } = req.params;
    const { value } = req.body;
    const user = await User.findById(_id);
    const contactToPay = await User.findOne({ phone });
    const transaction = await Transaction.create({
      createdBy: _id,
      transactionName: "zelle to Lucas",
      transactionValue: value,
      transactionDate: Date.now(),
    });
    user.balance -= value;
    contactToPay.balance += value;
    await contactToPay.save();
    await user.save();

    res.send(transaction);
  } catch (error) {
    res.send(error);
  }
};
