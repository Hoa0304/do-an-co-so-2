import React from 'react'

import s from './Cart.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGear,
	faHeart as heartSolid,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Button from '../Button/Button'

const Cart = ({
	isFavorite = false,
	originPrice,
	secondPrice,
	badge,
	sale,
	name,
	id,
	poster,
}) => {
	const VND = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
	})

	return (
		<div className={s.cart}>
			<div className={s.cartTop}>
				<a
					href={`/product/${id}`}
					className={s.cartImageWrap}
				>
					<img
						src={poster}
						alt='product'
					/>
				</a>
				{sale && <span className={s.sale}>{sale}%</span>}
				<FontAwesomeIcon
					icon={isFavorite ? heartSolid : faHeart}
					className={s.heart}
				/>
				{badge && <span className={s.badge}>{badge}</span>}
			</div>
			<div className={s.cartBody}>
				<a
					href='#!'
					className={s.name}
				>
					{name ?? ''}
				</a>
				<div className={s.cartPrice}>
					<div className={s.cartBox}>
						<span className={s.originPrice}>
							{originPrice && VND.format(originPrice)}
						</span>
						{secondPrice && (
							<span className={s.secondPrice}>{VND.format(secondPrice)}</span>
						)}
					</div>
					<Button>
						<FontAwesomeIcon
							icon={faGear}
							className={s.cartOptions}
						/>
					</Button>
				</div>
			</div>
			<div className={s.cartBottom}></div>
		</div>
	)
}

export default Cart
