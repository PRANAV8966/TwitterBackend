import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type:String,
        required:true,
        max: [250, 'tweet cannot be more than 250 character']
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    // hashtags: [
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:'HashTag' 
    //     }
    // ],
    likes: [
        {
            type:mongoose.Schema.Types.ObjectId,           
            ref:'Like'
        }
    ]
}, {timestamp:true});

// tweetSchema.virtual('contentWithEmail').get(function get() {
//     return `${this.content} is created by: ${this.userEmail}`;
// })

// tweetSchema.pre('save', function (next) {
//     console.log('inside a hook');
//     this.content = this.content + '...';
//     next();
// })

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;
