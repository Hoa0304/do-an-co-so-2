import React, { useState } from 'react'

import { useParams } from 'react-router-dom'
import { productList } from './Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Product.scss'
import s from './Products.module.scss'
import Coupon from '../../components/Coupon/Coupon'
import CartNumberSelect from '../Cart/CartSelect/CartNumberSelect'
import Button from '../../components/Button/Button'
import {
	faArrowRightArrowLeft,
	faShield,
	faTruck,
} from '@fortawesome/free-solid-svg-icons'
import Option from './Components/Option'
import NewItem from './Components/NewItem'
import Carts from '../../components/Cart/Carts'

const Product = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [isOpen, setIsOpen] = useState(false)
	const param = useParams()
	const productId = param.productId
	const product = productList.filter(
		(pro) => pro.id.toString() === productId
	)[0]
	const VND = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
	})
	const newProducts = [
		...productList,
		{
			...productList[0],
			id: 4,
		},
		{
			...productList[1],
			id: 5,
		},
		{
			...productList[2],
			id: 6,
		},
	]

	const handleAddCart = () => {}

	return (
		<section className='wrapper'>
			<div className='basic-info'>
				<div className='product-images'>
					<Swiper
						style={{
							'--swiper-navigation-color': '#fff',
							'--swiper-pagination-color': '#fff',
						}}
						spaceBetween={10}
						navigation={true}
						thumbs={{
							swiper:
								thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
						}}
						modules={[FreeMode, Navigation, Thumbs]}
						className='mySwiper2'
					>
						{product.images.map((image, index) => (
							<SwiperSlide key={index}>
								<img
									src={image}
									alt='product'
									className='main-image'
								/>
								<FontAwesomeIcon
									icon={faHeart}
									className='favorite'
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className='mySwiper'
					>
						{product.images.map((image, index) => (
							<SwiperSlide key={index}>
								<img
									src={image}
									alt='product'
									className='main-image'
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className='product-info'>
					<h1 className={s.productName}>{product.name}</h1>
					<div className={s.productId}>
						<span>Mã sản phẩm: </span>
						<span className={s.textHighLight}>Đang cập nhật</span>
					</div>
					<div className={s.brand}>
						<span>Thương hiệu:</span>
						<span className={s.textHighLight}> Apple</span>
						<span className={s.line}> | </span>
						<span> Tình trạng:</span>
						<span className={s.textHighLight}> Còn hàng</span>
					</div>
					<div className={s.priceBox}>
						<span className={s.originPrice}>
							<b>{VND.format((81 * product.price) / 100)}</b>
						</span>
						<span className={s.secondPrice}>
							<b>{VND.format(product.price)}</b>
						</span>
					</div>
					<div className={s.saleId}>
						<b>Mã giảm giá</b>
						<div className={s.coupons}>
							<Coupon content='Giảm 50%' />
							<Coupon content='Giảm 15%' />
							<Coupon content='Giảm 10k' />
						</div>
					</div>
					<div className={s.optionBox}>
						<span>
							<b>{product.options.title}</b>
						</span>
						<div className={s.options}>
							{product.options.values.map((option, index) => {
								return (
									<Option
										groupId={'option'}
										value={index === 0}
										option={option}
										key={index}
									/>
								)
							})}
						</div>
					</div>
					<div className={s.quantityBox}>
						<span>
							<b>Số lượng:</b>
						</span>
						<CartNumberSelect
							quantities={product.quantities}
							size='md'
						/>
					</div>
					<div className={s.actions}>
						<Button
							bg
							xl
							onClick={handleAddCart}
						>
							Thêm vào giỏ hàng
						</Button>
						<Button
							outline
							xl
						>
							Mua ngay
						</Button>
					</div>
					<div className={s.benefitBox}>
						<h5 className={s.title}> Quyền lợi & chính sách: </h5>
						<div className={s.benefits}>
							<span className={s.benefit}>
								<span className={s.icon}>
									<FontAwesomeIcon icon={faArrowRightArrowLeft} />
								</span>
								<span>7 ngày hoàn trả miễn phí</span>
							</span>
							<span className={s.benefit}>
								<span className={s.icon}>
									<FontAwesomeIcon icon={faShield} />
								</span>
								<span>Hàng chính hãng</span>
							</span>
							<span className={s.benefit}>
								<span className={s.icon}>
									<FontAwesomeIcon icon={faTruck} />
								</span>
								<span>Miễn phí vận chuyển</span>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className={`${s.detailsBox} flex flex-col gap-[2rem] md:flex-row`}>
				<div className={`${s.productInfo} flex-1 md:flex-[3]`}>
					<h3 className={s.title}>Thông tin sản phẩm</h3>
					<div className={s.details}>
						<Para />
					</div>
				</div>
				<div className={`${s.specifications} flex-1`}>
					<h3 className={s.title}>Thông số kỹ thuật</h3>
					<table className={`${s.table} ${isOpen ? s.open : ''}`}>
						<tbody className='w-full block'>
							<tr className={s.row}>
								<td className={s.cell}>Thương hiệu</td>
								<td className={s.cell}>Apple</td>
							</tr>
							<tr className={s.row}>
								<td className={s.cell}>Xuất xứ thương hiệu</td>
								<td className={s.cell}>Mỹ</td>
							</tr>
							<tr className={s.row}>
								<td className={s.cell}>Camera sau</td>
								<td className={s.cell}>Chính 48 MP & Phụ 12 MP, 12 MP</td>
							</tr>
							<tr className={s.row}>
								<td className={s.cell}>Camera trước</td>
								<td className={s.cell}>12 MP</td>
							</tr>
							<tr className={s.row}>
								<td className={s.cell}>Chip set</td>
								<td className={s.cell}>A16</td>
							</tr>
							<tr className={s.row}>
								<td className={s.cell}>Kích thước</td>
								<td className={s.cell}>
									Dài 164 mm - Ngang 75.4 mm - Dày 7.9 mm
								</td>
							</tr>
							<tr className={s.row}>
								<td className={s.cell}>Loại/ Công nghệ màn hình</td>
								<td className={s.cell}>OLED</td>
							</tr>
							<tr className={s.row}>
								<td className={s.cell}>Hỗ trợ 5G</td>
								<td className={s.cell}>Có</td>
							</tr>
							<tr className={s.row}>
								<td className={s.cell}>Hàng chính hãng</td>
								<td className={s.cell}>Có</td>
							</tr>
							<tr className={s.row}>
								<td className={s.cell}>Số sim</td>
								<td className={s.cell}>2 sim</td>
							</tr>
							<tr className={s.row}>
								<td className={s.cell}>Xuất xứ</td>
								<td className={s.cell}>Trung Quốc</td>
							</tr>
							<tr className={s.row}>
								<td className={s.cell}>Trọng lượng sản phẩm</td>
								<td className={s.cell}>175g</td>
							</tr>
						</tbody>
					</table>
					<Button
						bg
						full
						xl
						onClick={() => setIsOpen((open) => !open)}
					>
						{isOpen ? 'Thu gọn' : 'Xem thêm'}
					</Button>
					<div className={s.newsBox}>
						<h4 className={s.title}>Tin nổi bật</h4>
						<div className={`${s.news} flex flex-col gap-4`}>
							<NewItem img={'https://s.net.vn/HvMb'}>
								Xiaomi 13 đang được thử nghiệm MIUI 15 ổn định dựa trên Android
								14Xiaomi 13 đang được thử nghiệm MIUI 15 ổn định dựa trên
								Android 14Xiaomi 13 đang
							</NewItem>
							<NewItem img={'https://s.net.vn/4Fwf'}>
								Apple Pencil 3 khả năng có cơ chế thay ngòi cùng với tính năng
								hoàn toàn mới
							</NewItem>
							<NewItem img={'https://s.net.vn/QA5q'}>
								Tư vấn chọn mua laptop HP hỗ trợ tác vụ học tập văn phòng cơ bản
								bán chạy tại TGDĐ
							</NewItem>
							<NewItem img={'https://s.net.vn/qEsv'}>
								Apple dự kiến sẽ sớm đưa một công cụ mạnh mẽ tích hợp AI lên App
								Store
							</NewItem>
							<NewItem img={'https://s.net.vn/kuRF'}>
								Tầm giá 1 triệu, rinh ngay combo tai nghe + loa này, chất lượng
								khỏi bàn, chill nhạc miễn chê Tầm giá 1 triệu, rinh ngay combo
								tai nghe + loa này, chất lượng khỏi bàn, chill nhạc miễn chê
							</NewItem>
						</div>
					</div>
				</div>
			</div>
			<div className={`${s.moreProducts} mt-8`}>
				<h4 className={`${s.title}`}>Sản phẩm cùng loại</h4>
				<div className={`${s.products}`}>
					<Carts
						cartList={newProducts}
						scroll
					/>
				</div>
			</div>
		</section>
	)
}

const Para = () => {
	return (
		<>
			<p>
				iPhone 14 Pro Max. Bắt trọn chi tiết ấn tượng với Camera Chính 48MP.
				Trải nghiệm iPhone theo cách hoàn toàn mới với Dynamic Island và màn
				hình Luôn Bật. Công nghệ an toàn quan trọng – Phát Hiện Va Chạm1 thay
				bạn gọi trợ giúp khi cần kíp
			</p>{' '}
			<br />
			<p>Tính năng nổi bật</p> <br />
			<p>
				Màn hình Super Retina XDR 6,7 inch với tính năng Luôn Bật và ProMotion{' '}
				<br />
				Dynamic Island, một cách mới tuyệt diệu để tương tác với iPhone <br />{' '}
				Camera Chính 48MP cho độ phân giải gấp 4 lần <br /> Chế độ Điện Ảnh nay
				đã hỗ trợ 4K Dolby Vision tốc độ lên đến 30 fps <br /> Chế độ Hành Động
				để quay video cầm tay mượt mà, ổn định <br /> Công nghệ an toàn quan
				trọng – Phát Hiện Va Chạm1 thay bạn gọi trợ giúp khi cần kíp <br /> Thời
				lượng pin cả ngày và thời gian xem video lên đến 29 giờ3 <br /> A16
				Bionic, chip điện thoại thông minh tuyệt đỉnh. Mạng di động 5G siêu
				nhanh <br /> Các tính năng về độ bền dẫn đầu như Ceramic Shield và khả
				năng chống nước <b></b> iOS 16 đem đến thêm nhiều cách để cá nhân hóa,
				giao tiếp và chia sẻ
			</p>{' '}
			<br />
			<p>Pháp lý</p> <br />
			<p>
				1SOS Khẩn Cấp sử dụng kết nối mạng di động hoặc Cuộc Gọi Wi-Fi. <br />
				2Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật, kích thước
				màn hình theo đường chéo là 6,69 inch. Diện tích hiển thị thực tế nhỏ
				hơn. <br />
				3Thời lượng pin khác nhau tùy theo cách sử dụng và cấu hình; truy cập
				apple.com/batteries để biết thêm thông tin. <br />
				4Cần có gói cước dữ liệu. Mạng 5G chỉ khả dụng ở một số thị trường và
				được cung cấp qua một số nhà mạng. Tốc độ có thể thay đổi tùy địa điểm
				và nhà mạng. Để biết thông tin về hỗ trợ mạng 5G, vui lòng liên hệ nhà
				mạng và truy cập apple.com/iphone/cellular. <br />
				5iPhone 14 Pro Max có khả năng chống tia nước, chống nước và chống bụi.
				Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm có kiểm
				soát đạt mức IP68 theo tiêu chuẩn IEC 60529 (chống nước ở độ sâu tối đa
				6 mét trong vòng tối đa 30 phút). Khả năng chống tia nước, chống nước và
				chống bụi không phải là các điều kiện vĩnh viễn. Khả năng này có thể
				giảm do hao mòn thông thường. Không sạc pin khi iPhone đang bị ướt. Vui
				lòng tham khảo hướng dẫn sử dụng để biết cách lau sạch và làm khô máy.
				Không bảo hành sản phẩm bị hỏng do thấm chất lỏng. <br />
				6Một số tính năng không khả dụng tại một số quốc gia hoặc khu vực.
			</p>
			<p></p>
		</>
	)
}

export default Product
