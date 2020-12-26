const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: Number,
        default: 0
    },
    sizes: {
        type: Array,
        default: []
    },
    images: {
        type: Array,
        default: []
    },
    colors: {
        type: Array,
        default: []
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    tokenExp: {
        type: Number
    }
}, { timestamps: true })

productSchema.index({
    title:'text',
    description:'text'
},{
    weights:{
        title: 5,
        description: 3
    }
})
const Product = mongoose.model('Product', productSchema);

module.exports = { Product }