const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema ({
    name: {
        type: String, 
        required: true,
    },
    body: {
        type: String, 
        required: true,
    },
    excerpt: {
        type: String, 
    },
    categories: {
        type: [mongoose.Types.ObjectId],
        ref: 'Category',
    },
    tags: {
        type: [mongoose.Types.ObjectId],
        ref: 'Tag',
    },
    author: {
        type: [mongoose.Types.ObjectId],
        ref: 'Author',
    },
    createdAt: {type: Date, immutable:true, default: () => Date.now},

    updatedAt: {type: Date, default: () => Date.now}
},
    //  {timestamps: true}

)

module.exports = mongoose.model('Post', postSchema)