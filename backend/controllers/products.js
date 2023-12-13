export const getAllProduct = async (req, res) => {
	try {
		return res.status(200).send({ msg: 'Send done' })
	} catch (error) {
		console.log(err)
		return res.status(500).send({ msg: err })
	}
}

export const getProductById = async (req, res) => {
	try {
		console.log(req.params)
		return res.status(200).send({ msg: req.params })
	} catch (error) {
		console.log(error)
		return res.status(500).send({ msg: error })
	}
}

export const getProductByName = async (req, res) => {
	try {
		console.log(req.params)
		return res.status(200).send({ msg: req.params })
	} catch (error) {
		console.log(error)
		return res.status(500).send({ msg: error })
	}
}

export const uploadImage = async (req, res) => {
	try {
		console.log(req.file)
		return res.status(200).send({ msg: req.file })
	} catch (error) {
		console.log(error)
		return res.status(500).send({ msg: error })
	}
}
