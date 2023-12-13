import React from 'react'

import s from './Loading.module.scss'

const Loading = ({
	classes = '',
	style = {},
	color = 'grey',
	width = '5rem',
	height = '5rem',
}) => {
	return (
		<div
			className={`${classes} ${s.loading} border-[${color}] w-[${width}] h-[${height}]`}
			style={style}
		></div>
	)
}

export default Loading
