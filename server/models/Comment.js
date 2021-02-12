const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    writer: {

    },
    postId: {

    },
    responseto: {

    },
    content: {

    }
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentschema);

module.exports = { Comment };