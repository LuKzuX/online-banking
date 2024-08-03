import express from "express";
export const router = express.Router();
import {
  createUser,
  loginUser,
  getUserInfo,
  updateUser,
  deleteUser,
} from "../controllers/user.js";
import {
  createCard,
  getAllCardInfo,
  getUserCards,
  updateCard,
  deleteCard,
} from "../controllers/card.js";
import {
  addContact,
  payContact,
  getUserSingleContact,
  getUserContacts,
  deleteContact,
} from "../controllers/contact.js";
import {
  newTransaction,
  getUserTransactions,
  getUserTransactionsChart,
} from "../controllers/transaction.js";
import { userAuth } from "../middleware/userAuth.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

router.post(`/signup`, createUser);
router.post(`/signin`, loginUser);
router.get("/home", userAuth, getUserInfo);
router.patch("/user/update", userAuth, updateUser);
router.delete("/user/delete", userAuth, deleteUser);

router.get("/all-cards", userAuth, verifyAdmin, getAllCardInfo);
router.get("/cards", userAuth, getUserCards);
router.post("/add-card", userAuth, createCard);
router.patch("/cards/:id", userAuth, updateCard);
router.delete("/cards/:id", userAuth, deleteCard);

router.get("/contacts", userAuth, getUserContacts);
router.get("/contacts/:phone", userAuth, getUserSingleContact);
router.post("/add-contact", userAuth, addContact);
router.post("/pay-contact/:phone", userAuth, payContact);
router.delete("/contacts/:phone", userAuth, deleteContact);

router.post("/new-transaction", userAuth, newTransaction);
router.get("/transactions", userAuth, getUserTransactions);
router.get("/chart", userAuth, getUserTransactionsChart);
