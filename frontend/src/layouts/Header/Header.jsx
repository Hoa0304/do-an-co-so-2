import React, { useState } from 'react'

import './Header.scss'
import HeaderTop from './HeaderTop'
import HeaderMenu from './HeaderMenu'

const Header = () => {
	const [active, setActive] = useState(false)

	const toggleActiveMenu = () => {
		setActive((active) => !active)
	}

	return (
		<header className='header'>
			<HeaderTop toggleActiveMenu={toggleActiveMenu} />
			<HeaderMenu
				active={active}
				toggleActiveMenu={toggleActiveMenu}
			/>
		</header>
	)
}

export default Header
