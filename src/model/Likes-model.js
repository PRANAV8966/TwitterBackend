import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
    onModel:{
        type:String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    likedOn: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath: 'onModel'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{timestamps:true});

const Like = mongoose.model('Like', LikeSchema);

export default Like;