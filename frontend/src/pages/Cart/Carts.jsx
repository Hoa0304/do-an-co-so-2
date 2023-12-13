import React, { useContext } from 'react'

import s from './Carts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { AppContext } from '~/context/AppContext'
import Button from '../../components/Button/Button'

const Carts = ({ products = 0 }) => {
	const { isOpenCarts, setIsOpenCarts } = useContext(AppContext)

	const closeCarts = () => {
		setIsOpenCarts(false)
	}

	return (
		<>
			<section className={`${s.side} ${isOpenCarts ? s.active : ''}`}>
				<div className={s.wrapper}>
					<div className={s.top}>
						<div className={s.topLeft}>
							<span>Giỏ hàng</span>
							<span>({products} sản phẩm)</span>
						</div>
						<div
							className={s.topRight}
							onClick={closeCarts}
						>
							<FontAwesomeIcon icon={faXmark} />
						</div>
					</div>
					<div className={s.bottom}></div>
					<div className={s.pay}>
						<div className={s.payTop}>
							<span className={s.moneyText}>Thành tiền: </span>
							<span className={s.money}>0₫</span>
						</div>
						<Button
							primary
							bg
							xl
							full
						>
							Đặt hàng
						</Button>
					</div>
				</div>
			</section>
			<div
				className={`${s.overlay} ${isOpenCarts ? s.active : ''}`}
				onClick={closeCarts}
			></div>
		</>
	)
}

export default Carts
