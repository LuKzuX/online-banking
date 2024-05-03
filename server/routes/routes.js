import express from 'express'
export const router = express.Router()
import { createUser, loginUser } from "../controllers/user.js"

router.post(`/signup`, createUser)
router.post(`/signin`, loginUser)  