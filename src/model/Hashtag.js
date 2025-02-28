const mongoose = require('mongoose');
const Tweet = require('./twitter-model');

const hashtagSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    tweets :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tweet"
        }
    ],


}, {timestamp:true});

const HashTag = mongoose.model('Tweet', tweetSchema);
module.exports =  HashTag;