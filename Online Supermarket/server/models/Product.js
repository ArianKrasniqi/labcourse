const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    title: {
        type: String,
        maxlength: 50,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: [
        {
            type: String,
            default: ""
        }
    ],
    subCategory: {
        type: Schema.Types.String,
        ref: 'SubCategory'
    },
    discount: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: -1
    },
    sold: {
        type: Number
    }
}, { timesstamps: true});

module.exports = mongoose.model('Product', productSchema);