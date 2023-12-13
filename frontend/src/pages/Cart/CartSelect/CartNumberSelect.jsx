import React, { useState } from 'react'

import s from './CartSelect.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'

const CartNumberSelect = ({ quantities = 0, size = 'sm' }) => {
	const className = new Map([
		['sm', s.sm],
		['md', s.md],
		['lg', s.lg],
		['xl', s.xl],
	])
	const classes = className.get(size)
	const [quantity, setQuantity] = useState(quantities)
	const increaseQuantity = () => {
		setQuantity(quantity + 1)
	}
	const decreaseQuantity = () => {
		if (quantity === 0) return
		setQuantity(quantity - 1)
	}

	return (
		<div className={s.wrapper}>
			<span
				className={`${s.minus} ${s.box} ${classes}`}
				onClick={decreaseQuantity}
			>
				<FontAwesomeIcon icon={faMinus} />
			</span>
			<span className={`${s.number} ${s.box} ${classes} select-none`}>
				{quantity}
			</span>
			<span
				className={`${s.add} ${s.box} ${classes}`}
				onClick={increaseQuantity}
			>
				<FontAwesomeIcon icon={faAdd} />
			</span>
		</div>
	)
}

export default CartNumberSelect
