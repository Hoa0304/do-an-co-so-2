import React, { useContext, useReducer, useState } from 'react'
import axios from 'axios'

import './Auth.scss'
import { LoadingButton } from '@mui/lab'
// import Alert from '@mui/material/Alert'

import registerImage from '~/assets/images/registerSideImage.jpg'
import loginImage from '~/assets/images/LoginSideImage.jpg'
import authReducer, { AUTH_ACTION, initials } from '~/reducer/AuthReducer'
import { useNavigate } from 'react-router-dom'
import { validateUser } from '~/helper'
import { RESPONSE as Constants } from '~/constants/constant'

const Auth = () => {
	const [active, setActive] = useState(false)
	const [auth, dispath] = useReducer(authReducer, initials)
	const [loading, setLoading] = useState(false)
	// const [noti, setNoti] = useState({
	// 	type: 'success',
	// 	message: 'Sign up succesfully',
	// })
	const navigate = useNavigate()

	const handleLogin = (e) => {
		e.preventDefault()
		const { emailSignIn: email, passwordSignIn: password } = auth
		if (!validateUser(email, password)) console.log('false')
		const data = {
			email,
			password,
		}
		setLoading(true)
		axios
			.post(`http://localhost:5000/user/get`, data)
			.then((res) => {
				const data = res.data
				if (data.status === Constants.RESPONSE_SUCCESS) {
					localStorage.setItem(
						'user',
						JSON.stringify({ ...data.user, accessToken: data.accessToken })
					)
					localStorage.setItem('isLogin', true)
					if (data.user.isAdmin) navigate('/admin')
					else navigate('/')
				} else {
					alert(data.message)
				}
			})
			.catch((err) => console.log('err', err))
			.finally(() => setLoading(false))
	}

	const handleSignup = (e) => {
		e.preventDefault()
		const {
			username,
			emailSignUp: email,
			passwordSignUp: password,
			confirm,
		} = auth
		if (!validateUser(username, email, password, confirm)) return
		if (password !== confirm) return
		const data = {
			username,
			email,
			password,
			confirm,
		}
		setLoading(true)
		axios
			.post(`http://localhost:5000/user`, data)
			.then((res) => {
				console.log(res.data)
				setActive(false)
			})
			.catch((err) => console.log(err))
	}

	return (
		<section className='auth-ui'>
			<div className={`container ${active ? 'active' : ''}`}>
				<div className='user signinBx'>
					<div className='imgBx'>
						<img
							src={registerImage}
							alt=''
						/>
					</div>
					<div className='formBx'>
						<form action=''>
							<h2>Sign In</h2>
							<div>
								<input
									type='email'
									name=''
									placeholder='Email'
									value={auth.emailSignIn}
									onChange={(e) =>
										dispath({
											type: AUTH_ACTION.CHANGE_EMAIL_SIGNIN,
											value: e.target.value,
										})
									}
								/>
							</div>
							<input
								type='password'
								name=''
								placeholder='Password'
								value={auth.passwordSignIn}
								onChange={(e) =>
									dispath({
										type: AUTH_ACTION.CHANGE_PASSWORD_SIGNIN,
										value: e.target.value,
									})
								}
							/>
							{loading ? (
								<LoadingButton loading />
							) : (
								<input
									type='submit'
									onClick={(e) => handleLogin(e)}
									name=''
									value='Login'
								/>
							)}
							<p className='signup'>
								Don't have an account ?
								<a
									href='#!'
									onClick={() => setActive(true)}
								>
									Sign Up.
								</a>
							</p>
						</form>
					</div>
				</div>
				<div className='user signupBx'>
					<div className='formBx'>
						<form action=''>
							<h2>Create an account</h2>
							<input
								type='text'
								name=''
								placeholder='Username'
								onChange={(e) =>
									dispath({
										type: AUTH_ACTION.CHANGE_USERNAME_SIGNUP,
										value: e.target.value,
									})
								}
							/>
							<input
								type='email'
								name=''
								placeholder='Email Address'
								onChange={(e) =>
									dispath({
										type: AUTH_ACTION.CHANGE_EMAIL_SIGNUP,
										value: e.target.value,
									})
								}
							/>
							<input
								type='password'
								name=''
								placeholder='Create Password'
								onChange={(e) =>
									dispath({
										type: AUTH_ACTION.CHANGE_PASSWORD_SIGNUP,
										value: e.target.value,
									})
								}
							/>
							<input
								type='password'
								name=''
								placeholder='Confirm Password'
								onChange={(e) =>
									dispath({
										type: AUTH_ACTION.CHANGE_CONFIRM_SIGNUP,
										value: e.target.value,
									})
								}
							/>
							{loading ? (
								<LoadingButton loading />
							) : (
								<input
									type='submit'
									name=''
									value='Sign Up'
									onClick={handleSignup}
								/>
							)}
							<p className='signup'>
								Already have an account ?
								<a
									href='#!'
									onClick={() => setActive(false)}
								>
									Sign in.
								</a>
							</p>
						</form>
					</div>
					<div className='imgBx'>
						<img
							src={loginImage}
							alt=''
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Auth
