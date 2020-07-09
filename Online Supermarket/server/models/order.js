const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item = require("./item");

const orderSchema = new Schema(
	{
		location: {
			type: {
				type: String,
				enum: ["Point"],
				required: true
			},
			coordinates: {
				type: [Number],
				required: true
			}
		},
		active: {
			type: Boolean
		},
		delivered: {
			type: Boolean
		},
		orderTotal: {
			type: Number,
			required: true
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User"
		},
		items: [item]
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);