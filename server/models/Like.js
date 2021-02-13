const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({
    userId: {

    },
    commentId: {

    },
    videoId: {

    }

}, { timestamps: true })


const Like = mongoose.model('Like', likeSchema);

module.exports = { Like }