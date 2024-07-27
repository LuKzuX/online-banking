import { User } from "../models/userSchema.js";
import { Card } from "../models/cardSchema.js";
import { Transaction } from "../models/transactionSchema.js";

export const getUserContacts = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const user = await User.findById(_id);
    res.send(user.contacts);
  } catch (error) {
    res.send(error);
  }
};

export const getUserSingleContact = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const user = await User.findById(_id);
    const { phone } = req.params;
    const contact = user.contacts.find((contact) =>
      contact.find((contact) => contact.phone == phone)
    );
    res.send(contact);
  } catch (error) {
    res.send(error);
  }
};

export const addContact = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const { phone } = req.body;
    const user = await User.findById(_id);
    const contactToAdd = await User.find({ phone });
    user.contacts.push(contactToAdd[0]._id);
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
      transactionName: "online transfer to " + contactToPay.username,
      transactionValue: value,
      transactionDate: Date.now(),
      transactionRemainingInstallments: null,
      transactionTimeInstallments: "",
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
