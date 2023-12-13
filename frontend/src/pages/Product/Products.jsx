import React from 'react'

import style from './Products.module.scss'
import Carts from '../../components/Cart/Carts'

export const productList = [
	{
		id: 0,
		poster:
			'https://bizweb.dktcdn.net/thumb/1024x1024/100/497/938/products/a2.jpg?v=1696321699110',
		name: 'Iphone 14 Pro Max',
		price: 26000000,
		options: {
			title: 'Dung lượng:',
			values: ['128GB', '256GB'],
		},
		quantities: 2,
		images: [
			'https://bizweb.dktcdn.net/thumb/1024x1024/100/497/938/products/a2.jpg?v=1696321699110',
			'https://bizweb.dktcdn.net/thumb/1024x1024/100/497/938/products/a2-2.jpg?v=1696321701677',
			'https://bizweb.dktcdn.net/thumb/1024x1024/100/497/938/products/a2-3.jpg?v=1696321702913',
			'https://bizweb.dktcdn.net/thumb/1024x1024/100/497/938/products/a2-4.jpg?v=1696321703690',
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/a2-5.jpg?v=1696321704303',
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/a2-6.jpg?v=1696321705087',
		],
	},
	{
		id: 1,
		poster:
			'https://bizweb.dktcdn.net/100/497/938/products/a1.jpg?v=1696321359880',
		name: 'iPhone 15 Pro Max Titan Xanh 256g',
		price: 26000000,
		options: {
			title: 'Dung lượng:',
			values: ['128GB', '256GB'],
		},
		quantities: 1,
		images: [
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/a1.jpg?v=1696321359880',
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/a1-2.jpg?v=1696321361590',
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/a1-3.jpg?v=1696321362453',
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/a1-4.jpg?v=1696321363173',
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/a1-5.jpg?v=1696321363937',
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/a1-6.jpg?v=1696321364283',
		],
	},
	{
		id: 2,
		poster:
			'https://bizweb.dktcdn.net/100/497/938/products/sp20.jpg?v=1696241238643',
		name: 'Tai Nghe Bluetooth Headphone Edifier W820NB PLUS thoáng khí thoải mái',
		price: 1399000,
		options: {
			title: 'Màu sắc:',
			values: ['Trắng', 'Đen'],
		},
		quantities: 2,
		images: [
			'https://bizweb.dktcdn.net/100/497/938/products/sp20.jpg?v=1696241238643',
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/sp20-8.jpg?v=1696241239970',
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/sp20-7.jpg?v=1696241241043',
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/sp20-6.jpg?v=1696241241713',
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/sp20-5.jpg?v=1696241242423',
			'https://bizweb.dktcdn.net/thumb/medium/100/497/938/products/sp20-4.jpg?v=1696241243020',
		],
	},
]

const Products = () => {
	return (
		<section className={style.products}>
			<Carts cartList={productList} />
		</section>
	)
}

export default Products
