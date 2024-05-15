import express from 'express'
export const router = express.Router()
import { createUser, loginUser, protectedd } from "../controllers/user.js"
import {userAuth} from "../middleware/userAuth.js"

router.post(`/signup`, createUser)
router.post(`/signin`, loginUser)  

router.get("/protected", userAuth, protectedd)