import { createContext, useState } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
	const [isOpenCarts, setIsOpenCarts] = useState(false)

	return (
		<AppContext.Provider value={{ isOpenCarts, setIsOpenCarts }}>
			{children}
		</AppContext.Provider>
	)
}
