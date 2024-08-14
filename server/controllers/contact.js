import { User } from "../models/userSchema.js";
import { Card } from "../models/cardSchema.js";
import { Transaction } from "../models/transactionSchema.js";

export const getUserContacts = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const user = await User.findById(_id);
    const contacts = [];
    for (let i = 0; i < user.contacts.length; i++) {
      const contact = await User.findOne({ _id: user.contacts[i] });
      contacts.push(contact);
    }
    res.send(contacts);
  } catch (error) {
    res.send(error);
  }
};

export const getUserSingleContact = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const { phone } = req.params;
    const user = await User.findById(_id);
    const contact = [];
    for (let i = 0; i < user.contacts.length; i++) {
      const userToFind = await User.findOne({ _id: user.contacts[i] });
      if (userToFind.phone == phone) {
        contact.push(userToFind);
        res.send(contact);
      }
    }
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
    for (let i = 0; i < user.contacts.length; i++) {
      if (contactToAdd[0]._id.toString() == user.contacts[i].toString()) {
        return res.send("you already have this contact added");
      }
      if (contactToAdd[0].phone == user.phone) {
        return res.send("you cant add your own number")
      }
    }
    user.contacts.push(contactToAdd[0]._id);
    await user.save();
    res.send(user.contacts);
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

export const deleteContact = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const { phone } = req.params;
    const contactToDelete = await User.findOne({ phone });
    const user = await User.findById(_id);
    user.contacts = user.contacts.filter(
      (el) => el.toString() !== contactToDelete._id.toString()
    );
    await user.save();
    res.send(user);
  } catch (error) {
    return res.send(error);
  }
};
