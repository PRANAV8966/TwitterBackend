import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userEmail: {
        type:String,
        unique:true,
        required:true
    },
    userPassword: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required: true
    }
    
},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;