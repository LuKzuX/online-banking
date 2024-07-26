import express from "express";
export const router = express.Router();
import { createUser, loginUser, getUserInfo } from "../controllers/user.js";
import {
  createCard,
  getCardInfo,
  getAllCardInfo,
  getAllCardInfoSingle,
  updateCard,
  deleteCard
} from "../controllers/card.js";
import { addContact, payContact } from "../controllers/contact.js";
import { userAuth } from "../middleware/userAuth.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";


router.post(`/signup`, createUser);
router.post(`/signin`, loginUser);
router.get("/home", userAuth, getUserInfo);

router.get("/all-cards", userAuth, verifyAdmin, getAllCardInfo);
router.get("/all-cards/:id", userAuth, verifyAdmin, getAllCardInfoSingle);
router.get("/cards/:id", userAuth, getCardInfo);
router.post("/add-card", userAuth, createCard);
router.patch("/cards/:id", userAuth, updateCard);
router.delete("/cards/:id", userAuth, deleteCard)

router.post("/add-contact", userAuth, addContact)
router.post("/pay-contact/:phone", userAuth, payContact)

//router.get("/all-transactions", userAuth, verifyAdmin, getAllTransactions)
//router.get("/all-transactions/:id", userAuth, verifyAdmin, getAllTransactionsSingle)
//router.get("/transactions", userAuth, getUserTransactions)
//router.get("/transactions/:id", userAuth, getTransaction)
