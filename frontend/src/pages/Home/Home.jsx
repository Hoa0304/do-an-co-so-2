import React from 'react'
import Promotions from '../../components/Promotion/Promotions'
import { productList } from '../Product/Products'
import Banner from './Banner'
import BrandList from './BrandList'
import ProductList from './ProductList'
import useAuth from '~/hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { ROLE } from '~/constants/constant'

const Home = () => {
	const auth = useAuth()
	return auth !== ROLE.Admin ? (
		<>
			<Banner />
			<Promotions />
			<BrandList />
			<ProductList productList={productList} />
		</>
	) : (
		<Navigate to={'/admin'} />
	)
}

export default Home
