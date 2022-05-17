const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "{Path} is required"],
		minLength: [2, "{Path} must be at least 2 characters long"]
	},
    price: {
		type: Number,
        required: [true, "{Path} is required"],
		min: [1, "{Path} must be greater then 0"]
	},
	description: {
		type: String,
		required: [true, "{Path} is required"],
		minLength: [2, "{Path} must be at least 2 characters long"]
	}
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;