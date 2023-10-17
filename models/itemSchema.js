require('./item')
const Schema = require('mongoose').Schema

const itemSchema = new Schema(
	{
		name: { type: String, required: true },
		img: String,
		details: String,
		color: String,
   		size: String,
    	price: {type: Number, required: true},
	},
	{
		timestamps: true
	}
)

module.exports = itemSchema