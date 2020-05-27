const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: String,
        maxlength: 50
    },
    subcategory: {
        type: String,
        maxlength: 50
    }
});


const Category = mongoose.model('Category', categorySchema);

module.exports = { Category }