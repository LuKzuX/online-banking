import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  transactionName: {
    type: String,
    required: true,
  },

  transactionValue: {
    type: Number,
    required: true,
  },
  transactionDate: {
    type: Date,
    required: true,
  },
});

export const Transaction = mongoose.model("Transactions", transactionSchema);

