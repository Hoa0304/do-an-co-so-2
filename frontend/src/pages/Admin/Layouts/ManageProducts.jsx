import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import EditToolbar from '../Components/EditToolBar'
import Button from '../../../components/Button/Button'

const columnsAddProduct = [
	{ field: 'name', headerName: 'Tên thông số', width: 500, editable: true },
	{ field: 'value', headerName: 'Thông số', width: 500, editable: true },
]

const columns = [
	{ field: 'id', headerName: 'Id', width: 150, editable: true },
	{ field: 'name', headerName: 'Tên sản phẩm', width: 500, editable: true },
	{
		field: 'category',
		headerName: 'Loại sản phẩm',
		width: 200,
		editable: true,
	},
	{ field: 'brand', headerName: 'Hãng', width: 200, editable: true },
	{ field: 'price', headerName: 'Giá', width: 200, editable: true },
	{ field: 'sold', headerName: 'Đã bán', width: 100, editable: true },
	{ field: 'options', headerName: 'Phân loại', width: 300, editable: true },
]

const ManageProducts = ({ icon }) => {
	const [imageUpload, setImageUpload] = useState([])
	const [rows, setRows] = useState([])
	const [rowModesModel, setRowModesModel] = useState({})

	const handleUploadImage = (e) => {
		const imageUploads = e.target.files
		const keys = Object.keys(imageUploads)
		const images = []
		keys.forEach((item) => {
			const image = URL.createObjectURL(imageUploads[item])
			images.push(image)
		})
		setImageUpload((prev) => [...prev, images])
	}

	const handleRemoveImage = (index) => {
		const fakeImages = [...imageUpload]
		const updatedImages = [
			...fakeImages.slice(0, index),
			...fakeImages.slice(index + 1),
		]
		setImageUpload(updatedImages)
	}

	return (
		<div>
			<h3 className='text-5xl flex items-center gap-4'>
				{icon}
				<span className='text-gray'>Quản lí sản phẩm</span>
			</h3>
			<div className='py-[5rem]'>
				<h3 className='font-bold'>Danh sách sản phẩm</h3>
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
			<div className='flex flex-col gap-6 text-[1.6rem]'>
				<h3 className='text-3xl pb-[3rem] font-bold'>Thêm mới sản phẩm:</h3>
				<div className='flex flex-col gap-4'>
					<label htmlFor=''>Tên sản phẩm</label>
					<input
						type='text'
						placeholder='Nhập tên sản phẩm'
					/>
				</div>
				<div className='flex flex-col gap-4'>
					<label htmlFor=''>Giá</label>
					<input
						type='number'
						placeholder='Nhập giá'
						className='outline-none bg-transparent'
					/>
				</div>
				<div className='flex flex-col gap-4'>
					<label htmlFor=''>Loại danh mục</label>
					<select
						className='outline-none p-4 bg-transparent cursor-pointer border border-[#ccc] rounded-lg'
						value={''}
						onChange={() => ''}
					>
						<option value=''>None</option>
						<option value='Điện thoại'>Điện thoại</option>
						<option value='Laptop'>Laptop</option>
						<option value='Tivi'>Tivi</option>
					</select>
				</div>
				<div className='flex flex-col gap-4'>
					<label htmlFor=''>Hãng</label>
					<select
						className='p-4 cursor-pointer outline-none bg-transparent border border-[#ccc] rounded-lg'
						value={''}
						onChange={() => ''}
					>
						<option value=''>None</option>
						<option value='Apple'>Apple</option>
						<option value='Samsung'>Samsung</option>
						<option value='Xiaomi'>Xiaomi</option>
						<option value='Oppo'>Oppo</option>
						<option value='Huawei'>Huawei</option>
						<option value='Realme'>Realme</option>
						<option value='Google Pixel'>Google Pixel</option>
						<option value='Vivo'>Vivo</option>
						<option value='Panasonic'>Panasonic</option>
					</select>
				</div>
				<div className='flex flex-col gap-4'>
					<label htmlFor='image-upload'>Hình ảnh sản phẩm</label>
					<div className='flex items-center gap-4 overflow-scroll'>
						{imageUpload.map((image, index) => (
							<figure
								className='relative flex-shrink-0'
								key={index}
							>
								<img
									src={image}
									alt='hình ảnh sản phẩm'
									className='w-[10rem] h-[10rem] object-cover'
								/>
								<FontAwesomeIcon
									icon={faXmark}
									className='absolute top-0 right-0 text-[#ccc] p-2 cursor-pointer hover:bg-[#ccc5]'
									onClick={() => handleRemoveImage(index)}
								/>
							</figure>
						))}
					</div>
					<label
						htmlFor='image-upload'
						className='border border-[#ccc] border-solid self-start px-6 py-4 rounded-lg cursor-pointer'
					>
						Chọn tệp
					</label>
					<input
						type='file'
						id='image-upload'
						hidden
						multiple
						onChange={(e) => handleUploadImage(e)}
					/>
				</div>
				<div className='h-[40rem] w-full flex flex-col gap-4'>
					<h3>Thông số sản phẩm</h3>
					<ThemeProvider theme={createTheme({ typography: { fontSize: 25 } })}>
						<DataGrid
							rows={rows}
							columns={columnsAddProduct}
							initialState={{
								pagination: {
									paginationModel: { page: 0, pageSize: 5 },
								},
							}}
							pageSizeOptions={[5, 10, 15, 20, 25, 30]}
							style={{ fontSize: '1.6rem' }}
							// processRowUpdate={handleUpdateRows}
							slots={{
								toolbar: EditToolbar,
							}}
							slotProps={{
								toolbar: { setRows, setRowModesModel },
							}}
							rowModesModel={rowModesModel}
						/>
					</ThemeProvider>
					<div className='self-end'>
						<Button
							outline
							lg
						>
							Lưu
						</Button>
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<label htmlFor=''>Mô tả</label>
					<textarea
						className='w-full border border-[#ccc] border-solid rounded-lg text-[1.6rem] p-4 h-[20rem] bg-transparent'
						placeholder='Điền mô tả'
					></textarea>
					<div className='self-end'>
						<Button
							outline
							lg
						>
							Thêm
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ManageProducts
