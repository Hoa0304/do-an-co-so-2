import mongoose from 'mongoose'
import { Product } from '~/pages/Product/Product'

const optionsSchema = new mongoose.Schema({
	optionName: {
		type: Array,
		required: true,
	},
	optionValue: {
		type: String,
	},
})

const specificationSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	value: {
		type: String,
	},
	price: Number,
})

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	category_id: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: false,
		default: 'Sản phẩm mới',
	},
	brand: {
		type: String,
		default: '',
	},
	details: {
		type: String,
		required: false,
	},
	specifications: {
		type: [specificationSchema],
	},
	sold: {
		type: Number,
		required: false,
		default: 0,
	},
	quantity: {
		type: Number,
		required: true,
		default: 0,
	},
	options: [optionsSchema],
})
const Product = mongoose.model('Product', schema)
export default Product
