import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const HeaderMenu = ({ active, toggleActiveMenu }) => {
	return (
		<nav className={`header-menu ${active ? 'active' : ''}`}>
			<ul className='menus'>
				<li className='menu'>
					<NavLink
						to={'/'}
						className='menu-link'
						onClick={toggleActiveMenu}
					>
						Trang chủ
					</NavLink>
				</li>
				<li className='menu'>
					<NavLink
						to={'/introduce'}
						className='menu-link'
						onClick={toggleActiveMenu}
					>
						Giới thiệu
					</NavLink>
				</li>
				<li className='menu'>
					<NavLink
						to={'/products'}
						className='menu-link'
						onClick={toggleActiveMenu}
					>
						Sản phẩm
						<FontAwesomeIcon icon={faChevronDown} />
					</NavLink>
					<ul className='submenu'>
						<li className='menu-child'>
							<h4 className='menu-child-title'>Điện thoại</h4>
							<a
								href='#!'
								className='menu-child-name'
							>
								Iphone
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Samsung
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Xiaomi
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Realme
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Vivo
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Oppo
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Google Pixel
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								ROG
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Red Magic
							</a>
						</li>
						<li className='menu-child'>
							<h4 className='menu-child-title'>Tivi</h4>
							<a
								href='#!'
								className='menu-child-name'
							>
								Samsung
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Xiaomi
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Sony
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								LG
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								TCL
							</a>
						</li>
						<li className='menu-child'>
							<h4 className='menu-child-title'>Tủ lạnh</h4>
							<a
								href='#!'
								className='menu-child-name'
							>
								Electrolux
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Samsung
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Hitachi
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Panasonic
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Sharp
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								LG
							</a>
						</li>
						<li className='menu-child'>
							<h4 className='menu-child-title'>Laptop</h4>
							<a
								href='#!'
								className='menu-child-name'
							>
								Acer
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Asus
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Dell
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Lenovo
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								MSI
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								HP
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Huawei
							</a>
						</li>
						<li className='menu-child'>
							<h4 className='menu-child-title'>Máy giặt</h4>
							<a
								href='#!'
								className='menu-child-name'
							>
								Toshiba
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Electrolux
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Panasonic
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								LG
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Samsung
							</a>
							<a
								href='#!'
								className='menu-child-name'
							>
								Sanio
							</a>
						</li>
					</ul>
				</li>
				<li className='menu'>
					<NavLink
						to={'/favorites'}
						className='menu-link'
						onClick={toggleActiveMenu}
					>
						Yêu thích
					</NavLink>
				</li>
				<li className='menu'>
					<NavLink
						to={'/contact'}
						className='menu-link'
						onClick={toggleActiveMenu}
					>
						Liên hệ
					</NavLink>
				</li>
				<li className='menu'>
					<NavLink
						to={'news'}
						className='menu-link'
						onClick={toggleActiveMenu}
					>
						Tin tức
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderMenu
