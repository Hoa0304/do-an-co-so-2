import React, { useState } from 'react'

import s from './Option.module.scss'

const Option = ({ value = false, option = '', groupId }) => {
	const [checked, setChecked] = useState(value)

	const handleOnchange = () => {
		setChecked(!checked)
		console.log(checked)
	}

	return (
		<span className={s.option}>
			<input
				type='radio'
				id={option}
				name={groupId}
				hidden
				defaultChecked={checked}
				onChange={handleOnchange}
				className={s.input}
			/>
			<label htmlFor={option}>{option}</label>
		</span>
	)
}

export default Option
