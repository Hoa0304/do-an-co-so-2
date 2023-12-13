import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'

const columns = [
	{ field: 'id', headerName: 'ID' },
	{
		field: 'username',
		headerName: 'Username',
		width: 250,
		editable: true,
	},
	{
		field: 'email',
		headerName: 'Email',
		width: 400,
		editable: true,
	},
	{
		field: 'address',
		headerName: 'Address',
		width: 500,
		editable: true,
	},
	{
		field: 'role',
		headerName: 'Role',
		width: 100,
		editable: true,
	},
]

const UserAccount = ({ icon }) => {
	const [rows, setRow] = useState([
		{
			id: 0,
			username: 'myuserame',
			email: 'email@gmail.com',
			address: 'address',
			role: 'admin',
		},
	])

	const handleUpdateRows = (newRows, oldRows) => {
		console.log(newRows)
		console.log(oldRows)
	}

	return (
		<div>
			<h3 className='flex items-center gap-4 text-5xl'>
				{icon}
				<span className='text-gray'>Tài khoản người dùng</span>
			</h3>
			<div className='h-[40rem] w-full mt-[5rem]'>
				<ThemeProvider theme={createTheme({ typography: { fontSize: 25 } })}>
					<DataGrid
						rows={rows}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel: { page: 0, pageSize: 5 },
							},
						}}
						pageSizeOptions={[5, 10, 15, 20, 25, 30]}
						style={{ fontSize: '1.6rem' }}
						processRowUpdate={handleUpdateRows}
						onCellClick={(e) => console.log(e.value)}
						onRowSelectionModelChange={(e) => console.log}
					/>
				</ThemeProvider>
			</div>
		</div>
	)
}

export default UserAccount
