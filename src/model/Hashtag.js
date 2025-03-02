import mongoose from 'mongoose';

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

const HashTag = mongoose.model('HashTag', hashtagSchema);
export default HashTag;