import Jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'

import User from '../models/UserModel.js'
import * as Status from '../constants.js'
import Token from '../models/RefreshToken.js'

dotenv.config()

const expireAccessToken = '30s'
const expireRefreshToken = '2m'

// get refresh token from db
// export const getRefreshToken = async () => {
// 	const refreshTokens = await Token.find({})
// 	return refreshTokens
// }
let getRefreshTokens = []
// login
export const getUser = async (req, res) => {
	try {
		const { email, password } = req.body
		const data = await User.findOne({ email })
		const user = data._doc
		const { password: pass, ...returnUser } = user
		if (!user)
			return res.status(401).send({
				status: Status.RESPONSE_FAIL,
				message:
					'Không tìm thấy người dùng hợp lệ, Vui lòng kiểm tra lại Email',
			})
		const validPassword = bcrypt.compare(password, user.password)
		if (validPassword) {
			const refreshToken = generateRefreshToken(returnUser)
			const accessToken = generateAccessToken(returnUser)
			getRefreshTokens.push(refreshToken)
			res.cookie('refreshToken', refreshToken, {
				httpOnly: true,
				secure: false,
				path: '/',
				sameSite: 'strict',
			})
			const refreshTokens = getRefreshTokens
			const updatedRefreshToken = refreshTokens.push(refreshToken)
			return res.status(200).send({
				status: Status.RESPONSE_SUCCESS,
				user: returnUser,
				accessToken,
			})
		} else {
			return res.status(401).send({
				status: Status.RESPONSE_FAIL,
				message: 'Mật khẩu chưa chính xác, vui lòng kiểm tra lại',
			})
		}
	} catch (error) {
		console.log(error)
		return res.status(500).send({ message: err })
	}
}

// register
export const postUser = async (req, res) => {
	try {
		const user = req.body
		const salt = await bcrypt.genSalt(10)
		const hashed = await bcrypt.hash(user.password, salt)
		const newUser = {
			username: user.username,
			email: user.email,
			password: hashed,
		}
		const createdUser = await User.create(newUser)
		return res.status(200).send(createdUser)
	} catch (err) {
		console.log(err)
		return res.status(500).send({ err: err })
	}
}

// get all users
export const getAllUsers = async (req, res) => {
	try {
		const users = await User.find({})
		return res.status(200).send({ users })
	} catch (error) {
		console.log(error)
		return res.status(500).send({ msg: 'error' })
	}
}

// refresh token
export const requestRefreshToken = async (req, res) => {
	const refreshToken = req.cookies.refreshToken
	if (!refreshToken) return res.status(403).send({ status: Status.RESIGNIN })
	// const refreshTokens = getRefreshTokens
	if (!getRefreshTokens.includes(refreshToken))
		return res.status(403).json('Refresh token is not valid')

	Jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, user) => {
		if (err) return res.status(500).json(err)
		getRefreshTokens = getRefreshTokens.filter(
			(token) => token !== refreshToken
		)

		// create new refresh token
		const newRefreshToken = generateRefreshToken(user)
		const newAccessToken = generateAccessToken(user)
		getRefreshTokens.push(newRefreshToken)
		res.cookie('refreshToken', newRefreshToken, {
			httpOnly: true,
			secure: false,
			path: '/',
			sameSite: 'strict',
		})
		console.log(getRefreshTokens)
		return res.status(200).send({ accessToken: newAccessToken })
	})
}

// generate access token
export const generateAccessToken = (user) => {
	return Jwt.sign(
		{
			id: user._id,
			username: user.username,
			email: user.email,
		},
		process.env.ACCESS_TOKEN_KEY,
		{ expiresIn: expireAccessToken }
	)
}

// generate refresh token
export const generateRefreshToken = (user) => {
	return Jwt.sign(
		{
			id: user._id,
			username: user.username,
			email: user.email,
		},
		process.env.REFRESH_TOKEN_KEY,
		{ expiresIn: expireRefreshToken }
	)
}
