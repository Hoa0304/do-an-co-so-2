import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	ThemeProvider,
	createTheme,
} from '@mui/material'
import React, { useState } from 'react'
import Button from '../../../components/Button/Button'

const Category = ({ icon }) => {
	const [categories, setCategories] = useState(
		Array(15).fill({ name: 'iphone', parentName: 'Điện thoại' })
	)
	const [category, setCategory] = useState('')
	const [parentCategory, setParenCategory] = useState(null)

	const handleAddCategory = () => {
		setCategories([
			...categories,
			{
				name: category,
				parentName: parentCategory,
			},
		])
		console.log(parentCategory)
	}

	return (
		<div>
			<h1 className='text-5xl text-gray flex items-center gap-4'>
				{icon}Danh mục sản phẩm
			</h1>
			<div className='mt-[5rem]'>
				<table className='w-full text-md rtl:text-right text-gray-500 text-gray-400 border border-[#ddd] border-solid text-center'>
					<TableHeader />
					<TableBody categories={categories} />
				</table>
				<div className='mt-[5rem] text-4xl text-gray'>
					<h3>Thêm danh mục</h3>
					<div className='flex items-center gap-4'>
						<input
							type='text'
							placeholder='Nhập danh mục'
							className='flex-[2]'
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						/>
						<ThemeProvider
							theme={createTheme({ typography: { fontSize: 20 } })}
						>
							<FormControl
								required
								sx={{ m: 1, minWidth: 120 }}
								style={{ flex: '2' }}
							>
								<InputLabel id='demo-simple-select-required-label'>
									chọn
								</InputLabel>
								<Select
									labelId='demo-simple-select-required-label'
									id='demo-simple-select-required'
									label='Age *'
									onChange={(e) => setParenCategory(e.target.value)}
									value={parentCategory || ''}
								>
									<MenuItem value=''>
										<em>None</em>
									</MenuItem>
									<MenuItem value={'Điện thoại'}>Điện thoại</MenuItem>
									<MenuItem value={'Laptop'}>Laptop</MenuItem>
									<MenuItem value={'Tivi'}>Tivi</MenuItem>
								</Select>
							</FormControl>
						</ThemeProvider>
						<Button
							primary
							lg
							onClick={handleAddCategory}
						>
							Thêm
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

const TableHeader = () => {
	return (
		<thead className='text-md text-gray-700 text-gray-400 bg-[#ddd]'>
			<tr>
				<th
					scope='col'
					className='w-[10%] px-6 py-3'
				>
					STT
				</th>
				<th
					scope='col'
					className='px-6 py-3'
				>
					Mã danh mục
				</th>
				<th
					scope='col'
					className='px-6 py-3'
				>
					Tên danh mục
				</th>
				<th
					scope='col'
					className='px-6 py-3'
				>
					Tên danh mục cha
				</th>
			</tr>
		</thead>
	)
}

const TableBody = ({ categories }) => {
	return (
		<tbody className='text-center'>
			{categories.map((row, index) => (
				<tr
					className='border-b-[#ddd] border-solid'
					key={index}
				>
					<td className='border-[#ddd] border-solid border px-6 py-3'>
						{index}
					</td>
					<td className='border-[#ddd] border-solid border px-6 py-3'>
						{128654286 + index * 5}
					</td>
					<td className='border-[#ddd] border-solid border px-6 py-3'>
						{row.name}
					</td>
					<td className='border-[#ddd] border-solid border px-6 py-3'>
						{row.parentName}
					</td>
				</tr>
			))}
		</tbody>
	)
}

export default Category
