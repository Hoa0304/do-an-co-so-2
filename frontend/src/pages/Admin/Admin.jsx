import React, { useEffect } from 'react'

import useAuth from '~/hooks/useAuth'
import { ROLE } from '~/constants/constant'
import { useNavigate } from 'react-router-dom'
import SideBar from './Components/SideBar'
import MainPage from './Components/MainPage'
import { SideBarAdminProvider } from '~/context/SideBarAdminContext'

const Admin = () => {
	const auth = useAuth()
	console.log(auth)
	const navigate = useNavigate()
	useEffect(() => {
		if (auth !== ROLE.Admin) navigate('/')
	})
	return (
		<SideBarAdminProvider>
			<main className={`flex h-screen bg-white`}>
				<SideBar />
				<MainPage />
			</main>
		</SideBarAdminProvider>
	)
}

export default Admin
