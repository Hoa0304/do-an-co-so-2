import React from 'react'

import s from '../Carts.module.scss'

import image from '~/assets/images/redmi-note-12-turbo-1.jpg'
import CartNumberSelect from '../CartSelect/CartNumberSelect'

const CartItem = () => {
	return (
		<div className={s.item}>
			<a
				href='#!'
				className={s.imageWrap}
			>
				<img
					src={image}
					alt=''
					className={s.image}
				/>
			</a>
			<div className={s.info}>
				<a
					href='#!'
					className={s.name}
				>
					Redmi note 12 Turbo
				</a>
				<div className={s.infoBottom}>
					<div className={s.infoBottomLeft}>
						<span className={s.quantity}>Số lượng</span>
						<CartNumberSelect quantities={1} />
					</div>
					<div className={s.infoBottomRight}>
						<h5 className={s.cost}>8.990.000₫</h5>
						<span className={s.delete}>Bỏ sản phẩm</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
