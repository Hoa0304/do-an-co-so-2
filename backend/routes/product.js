import express from 'express'
import {
	getAllProduct,
	getProductById,
	getProductByName,
	uploadImage,
} from '../controllers/products.js'
import uploadCloud from '../configs/cloudinary.config.js'

const productRouter = express.Router()

productRouter.get('/getall', getAllProduct)
productRouter.post('/', uploadCloud.single('image'), uploadImage)
productRouter.get('/id/:id', getProductById)
productRouter.get('/name/:name', getProductByName)

export default productRouter
