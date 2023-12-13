import { useEffect } from 'react'
import WebFont from 'webfontloader'
import { RouterProvider } from 'react-router-dom'

import './assets/stylesheets/main.css'
import './assets/stylesheets/main.scss'
import AllRoutes from './routes/AllRoutes'

function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Poppins', 'Roboto', 'Chilanka'],
			},
		})
	})

	return (
		<div className='App'>
			<RouterProvider router={AllRoutes} />
		</div>
	)
}

export default App
