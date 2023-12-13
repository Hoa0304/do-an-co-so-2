// import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Carts from '~/components/Cart/Carts'
import { productList } from '../Product/Products'

const FindProduct = () => {
	// const [products, setProducts] = useState([])
	const params = useParams()
	const product = params.product.trim()
	const newProducts = productList.filter(
		(pro) => pro.name.toLowerCase().indexOf(product.toLowerCase()) >= 0
	)

	return (
		<section className='bg-white p-8'>
			<h1 className='ss-title py-4 text-xxl font-bold mt-[5rem]'>
				Kết quả tìm kiếm của: "{product}"
			</h1>
			<div className=''>
				<Carts cartList={newProducts} />
			</div>
		</section>
	)
}

export default FindProduct
