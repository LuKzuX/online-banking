import express from 'express'
export const router = express.Router()
import { createUser, loginUser, home } from "../controllers/user.js"
import {userAuth} from "../middleware/userAuth.js"
import {verifyAdmin} from "../middleware/verifyAdmin.js"

router.post(`/signup`, createUser)
router.post(`/signin`, loginUser)  

router.get("/home", userAuth, home)