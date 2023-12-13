import React from 'react'
import DashboardCardInfo from '../Components/DashboardCardInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faMobileScreenButton,
	faPeopleRoof,
	faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { Button } from '@mui/material'

ChartJS.register(ArcElement, Tooltip, Legend)
const data = {
	labels: ['Điện thoại', 'Ipad', 'Tivi', 'Máy giặt'],
	datasets: [
		{
			label: 'Value of Votes',
			data: [93, 20, 51, 15],
			backgroundColor: [
				'rgba(255, 99, 132)',
				'rgba(55, 162, 235)',
				'rgba(255, 206, 86)',
				'rgba(75, 192, 192)',
			],
			borderWidth: 1,
		},
	],
}

const options = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
			position: 'right',
		},
	},
}

const Dashboard = ({ icon }) => {
	return (
		<div>
			<h1 className='text-5xl flex items-center gap-4'>
				{icon}
				<span className='text-gray'>Dashboard</span>
			</h1>

			<div className='py-[5rem] flex gap-8 overflow-scroll'>
				<DashboardCardInfo
					icon={<FontAwesomeIcon icon={faUsers} />}
					title={'Users'}
					content={'3 accounts'}
					colorIcon={'text-[#FF6651]'}
				/>
				<DashboardCardInfo
					icon={<FontAwesomeIcon icon={faPeopleRoof} />}
					title={'Admins'}
					content={'1 admins'}
					colorIcon={'text-[#00aefd]'}
				/>
				<DashboardCardInfo
					icon={<FontAwesomeIcon icon={faMobileScreenButton} />}
					title={'Products'}
					content={'122 goods'}
					colorIcon={'text-[#20E3B2]'}
				/>
			</div>
			<div className='flex flex-col items-center lg:flex-row'>
				<div className='flex-1 max-w-[100%] aspect-square lg:max-w-[50%]'>
					<Pie
						data={data}
						options={options}
					/>
				</div>
				<div className='flex-1 text-center'>
					<h2 className='text-5xl mb-4'>Cơ cấu sản phẩm của cửa hàng</h2>
					<p className='mb-4'>Số liệu cực kì chi tiết, gọn gàng, đẹp đẽ</p>
					<p className='mb-4'>Cập nhật thường xuyên</p>
					<Button
						size='large'
						style={{ fontSize: '2rem' }}
						variant='contained'
					>
						Update now
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
