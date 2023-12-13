import { Navigate, createBrowserRouter, useLocation } from 'react-router-dom'

import Home from '~/pages/Home/Home'
import Introduce from '~/pages/Introduce/Introduce'
import Contact from '~/pages/Contact/Contact'
import New from '~/pages/New/New'
import Favorites from '~/pages/Favorite/Favorites'
import Support from '~/pages/Support/Support'
import Questions from '~/pages/Questions/Questions'
import Products from '~/pages/Product/Products'
import Auth from '~/pages/Auth/Auth'
import Policies from '~/pages/Policy/Policies'
import Delivery from '~/pages/Delivery/Delivery'
import RefundOrder from '~/pages/Refund/RefundOrder'
import Header from '~/layouts/Header/Header'
import Footer from '~/layouts/Footer/Footer'
import Carts from '../pages/Cart/Carts'
import { AppProvider } from '~/context/AppContext'
import NotFound from '~/pages/NotFound/NotFound'
import Body from '../pages/Body'
import Product from '~/pages/Product/Product'

import { UserProvider } from '~/context/UserContext'
import { useEffect } from 'react'
import Profile from '~/pages/Profile/Profile'
import PrivateRoutes from './PrivateRoutes'
import FindProduct from '~/pages/FindProduct/FindProduct'
import Admin from '~/pages/Admin/Admin'
import useAuth from '~/hooks/useAuth'
import { ROLE } from '~/constants/constant'

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window && window.scrollTo(0, 0)
	}, [pathname])

	return null
}

const Layout = () => {
	return (
		<>
			<ScrollToTop />
			<UserProvider>
				<AppProvider>
					<Header />
					<Carts isOpenCarts={true} />
				</AppProvider>
				<Body />
				<Footer />
			</UserProvider>
		</>
	)
}

const IsAdmin = () => {
	const auth = useAuth()
	return auth === ROLE.Admin ? <Admin /> : <Navigate to={'/auth'} />
}

const AllRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				element: <PrivateRoutes />,
				children: [
					{
						path: 'profile',
						element: <Profile />,
					},
					{
						path: 'favorites',
						element: <Favorites />,
					},
				],
			},
			{
				path: 'auth',
				element: <Auth />,
			},
			{
				path: 'introduce',
				element: <Introduce />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'products',
				element: <Products />,
				children: [
					{
						path: ':id',
					},
				],
			},
			{
				path: 'product/:productId',
				element: <Product />,
			},
			{
				path: 'find/:product',
				element: <FindProduct />,
			},
			{
				path: 'news',
				element: <New />,
			},
			{
				path: 'support',
				element: <Support />,
			},
			{
				path: 'questions',
				element: <Questions />,
			},
			{
				path: 'policy',
				element: <Policies />,
			},
			{
				path: 'shipping-method',
				element: <Delivery />,
			},
			{
				path: 'refund-order',
				element: <RefundOrder />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
	{
		path: 'admin',
		element: <IsAdmin />,
	},
])

export default AllRoutes
