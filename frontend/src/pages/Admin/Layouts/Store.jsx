import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const columns = [
	{ field: 'id', headerName: 'Id', editable: true, width: 100 },
	{ field: 'name', headerName: 'Tên sản phẩm', editable: true, width: 350 },
	{
		field: 'category',
		headerName: 'Thương hiệu',
		editable: true,
		width: 200,
	},
	{
		field: 'quantity',
		headerName: 'Lượng hàng còn trong kho',
		editable: true,
		width: 250,
	},
	{
		field: 'kind',
		headerName: 'Phân loại',
		editable: true,
		width: 300,
	},
]

const Store = ({ icon }) => {
	return (
		<div>
			<h3 className='flex items-center text-5xl gap-4'>
				{icon}
				<span className='text-gray'>Kho sản phẩm</span>
			</h3>
			<div className='h-[40rem] w-full mt-[5rem]'>
				<ThemeProvider theme={createTheme({ typography: { fontSize: 25 } })}>
					<DataGrid
						rows={[]}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel: { page: 0, pageSize: 5 },
							},
						}}
						pageSizeOptions={[5, 10, 15, 20, 25, 30]}
						style={{ fontSize: '1.6rem' }}
						// processRowUpdate={handleUpdateRows}
						onCellClick={(e) => console.log(e.value)}
						onRowSelectionModelChange={(e) => console.log}
						onCellEditStart={(e) => console.log(e.value)}
						onCellEditEnd={(e) => console.log(e.value)}
						onRowEditCommit={(e) => console.log(e)}
					/>
				</ThemeProvider>
			</div>
		</div>
	)
}

export default Store
