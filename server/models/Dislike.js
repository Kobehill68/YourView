const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dislikeSchema = mongoose.Schema({
    userId: {

    },
    commentId: {

    },
    videoId: {

    }
}, { timestamp: true });

const Dislike = mongoose.model('Dislike', dislikeSchema);

module.exports = { Dislike };