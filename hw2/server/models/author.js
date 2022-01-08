const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: {
        type: String, 
        required: true,
        maxlength: 255,
        minlength: 2,
        trim: true,    
    },
    email: {
        type: String,
        trim: true,
    },
    createdAt: {type: Date, immutable:true, default: () => Date.now},

    updatedAt: {type: Date, default: () => Date.now}
    
    
}, {timestamps: true}
)


module.exports = mongoose.model('Author', authorSchema)