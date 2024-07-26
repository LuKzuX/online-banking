import { User } from "../models/userSchema.js";
import { Card } from "../models/cardSchema.js";
import { Transaction } from "../models/transactionSchema.js";

export const newTransaction = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const { isCredit, valueOfTransaction, transactionParcelas } = req.body;
    const user = await User.findById(_id);
    const newTransaction = await Transaction.create({
      createdBy: _id,
      transactionName: "compra",
      transactionValue: valueOfTransaction,
      transactionDate: Date.now(),
      transactionParcelas: transactionParcelas || 0,
      isPaid: false,
    });

    res.send(newTransaction);
  } catch (error) {
    res.send(error);
  }
};

export const getUserTransactions = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const transactions = Transaction.find({ createdBy: _id });
    res.send(transactions);
  } catch (error) {
    res.send(error);
  }
};
