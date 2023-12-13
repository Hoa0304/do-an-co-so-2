import React, { useContext } from 'react'
import MenuMap from '../MenuMap'
import { SideBarAdminContext } from '~/context/SideBarAdminContext'

const MainPage = () => {
	const { currentPanel } = useContext(SideBarAdminContext)
	return (
		<div className='flex-[4] bg-[#f7f9fa] p-10 overflow-auto'>
			{MenuMap[currentPanel].element}
		</div>
	)
}

export default MainPage
