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
    const transactions = await Transaction.find({ createdBy: _id }).sort({transactionDate:-1})
    res.send( transactions );
  } catch (error) {
    res.send(error);
  }
};

export const getUserTransactionsChart = async (req, res, next) => {
  try {
    const { _id } = req.user.user;
    const { chartYear } = req.params;
    const transactions = await Transaction.find({ createdBy: _id });
    const monthlyTotals = {};
    const monthlyTotalsArray = [];
    const allYears = {};
    const allYearsArray = [];
    for (let i = 0; i < transactions.length; i++) {
      const date = new Date(transactions[i].transactionDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      if (year == chartYear.toString()) {
        if (!monthlyTotals[month]) {
          monthlyTotals[month] = 0; //creates a new key in the object
        }
        monthlyTotals[month] += transactions[i].transactionValue;
      }
    }
    for (let j = 0; j < Object.keys(monthlyTotals).length; j++) {
      const key = Object.keys(monthlyTotals)[j];
      const value = Object.values(monthlyTotals)[j];
      monthlyTotalsArray.push({ month: key, value: value });
    }
    for (let i = 0; i < transactions.length; i++) {
      const date = new Date(transactions[i].transactionDate);
      const year = date.getFullYear();
      if (!allYears[year]) {
        allYears[year] = "";
      }
      allYears[year] = new Date(transactions[i].transactionDate);
    }

    for (let j = 0; j < Object.keys(allYears).length; j++) {
      const key = Object.keys(allYears)[j];
      allYearsArray.push({ year: key });
    }

    res.json({ monthlyTotalsArray, allYearsArray });
  } catch (error) {
    res.send(error);
  }
};
