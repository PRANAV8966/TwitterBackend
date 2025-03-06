import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../config/serverConfig.js';

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
    
}, {timestamps:true});

userSchema.pre('save', async function(next) {
    const user = this;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = await bcrypt.hash(user.userPassword, salt);
    user.userPassword = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = function compare(Password) {
    return bcrypt.compareSync(Password, this.userPassword);
};

userSchema.methods.genJWT = function generate() {
    return jwt.sign({id: this._id, email: this.email}, JWT_KEY, {expiresIn: '1h'});
};

const User = mongoose.model('User', userSchema);
User.createIndexes();

export default User;