import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

userSchema.methods.compareSync = async (userPassword) => {
    return await bcrypt.compareSync(password, this.userPassword);
}

userSchema.pre('save', async function(next) {
    const user = this;
    const salt = bcrypt.genSaltSync(9);
    const encryptedPassword = await bcrypt.hash(user.userPassword, salt);
    user.userPassword = encryptedPassword;
    next();
})

const User = mongoose.model('User', userSchema);
User.createIndexes();

export default User;