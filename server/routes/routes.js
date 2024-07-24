import express from 'express'
export const router = express.Router()
import { createUser, loginUser, getUserInfo } from "../controllers/user.js"
import { createCard, getCardInfo, getAllCardInfo } from '../controllers/card.js'
import {userAuth} from "../middleware/userAuth.js"
import {verifyAdmin} from "../middleware/verifyAdmin.js"

router.post(`/signup`, createUser)
router.post(`/signin`, loginUser)  

router.get("/home", userAuth, getUserInfo)

router.get("/cards", userAuth, getAllCardInfo)
router.get("/cards/:id", userAuth, getCardInfo)
router.post("/add-card", userAuth, createCard)
