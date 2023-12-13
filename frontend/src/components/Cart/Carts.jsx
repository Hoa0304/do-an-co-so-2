import React from 'react'

import s from './Cart.module.scss'
import Cart from './Cart'
import Button from '../Button/Button'

const Carts = ({ cartList, scroll, seeMore }) => {
	return (
		<section className={s.wrapper}>
			<div className={`${scroll ? s.scroll : s.carts}`}>
				{cartList.map((cart) => {
					return (
						<Cart
							key={cart.id}
							sale={19}
							secondPrice={cart.price}
							originPrice={(81 * cart.price) / 100}
							badge={'Sản phầm mới'}
							name={cart.name}
							id={cart.id}
							poster={cart.poster}
						/>
					)
				})}
			</div>
			<div className={s.seeMore}>
				<Button
					outline
					xl
					to={'/products'}
				>
					Xem thêm
				</Button>
			</div>
		</section>
	)
}

export default Carts
