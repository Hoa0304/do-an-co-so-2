export const captalizeWord = (word) => {
	return word.charAt(0).toUpperCase().concat(word.slice(1))
}
export const captalizeString = (text) => {
	return text.split().map((word) => captalizeWord(word))
}

export const formatDate = (date) => {}

export const validateUser = (...info) => {
	for (let inf of info) {
		if (inf === '') return false
	}
	return true
}
