const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    },
    category: {
        type:String,
        default: 'n/a'
    },
    review: {
        type:String,
        default: 'n/a'
    },
    rating: {
        type:Number,
        required:true,
        min:1,
        max:5
    },
    ownerId: {
        type:String,
        required:true
    }
}, { timestamps: true })

const News = mongoose.model('News', newsSchema)

module.exports = { News }