const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	productId: {
		type: Schema.Types.ObjectId,
		ref: 'Product',
		required: true
	},
	quantity: {
		type: Number,
		required: true,
		min: [ 1, "The quantity can't be lower than 0." ]
	},
	totalPrice: {
		type: String,
		required: true
	}
});

module.exports = itemSchema;