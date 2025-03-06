import { UserRepository } from "../repository/index.js";

import UserError from '../utils/Errors/Duplicate-error.js';

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            if (error.code == 11000) {
                throw new UserError('Bad request', 'user already exists');
            }
            throw error;
        }
    }

    async getUserByEmail(emailId) {
        try {
            const user = await this.userRepository.getUserByEmail(emailId);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signIn(emailId, Password) {
        try {
            const user = await this.userRepository.getUserByEmail(emailId);
            if (!user) {
                throw {error:'user not found'};
            }
    
            if (!user.comparePassword(Password)) {
               throw {error:'incorrect password'};
            }
    
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;