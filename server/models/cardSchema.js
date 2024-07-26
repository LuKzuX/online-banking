import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
    unique: true,
  },

  cardHolder: {
    type: String,
    required: true,
  },

  isCredit: {
    type: Boolean,
    required: true
  },

  expiresIn: {
    type: Date,
    required: true,
  },

  securityCode: {
    type: Number,
    required: true,
  },
});

export const Card = mongoose.model("Cards", cardSchema);
