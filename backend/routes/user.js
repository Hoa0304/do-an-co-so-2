import express from 'express'
import {
	getUser,
	postUser,
	getAllUsers,
	requestRefreshToken,
} from '../controllers/user.js'
import { verifyToken } from '../middleware/middleware.js'

const userRouter = express.Router()

userRouter.post('/get', getUser)
userRouter.get('/getall', verifyToken, getAllUsers)
userRouter.post('/', postUser)
userRouter.post('/refresh', requestRefreshToken)

export default userRouter
