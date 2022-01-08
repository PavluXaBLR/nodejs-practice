const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String, 
        required: true,
        maxlength: 255,
        minlength: 2,
        trim: true,    
    },
    excerpt: {
        type: String, 
    },
    createdAt: {type: Date, immutable:true, default: () => Date.now},

    updatedAt: {type: Date, default: () => Date.now}
})

module.exports = mongoose.model('Category', categorySchema)