import { UserRepository } from "../repository/index.js";

import UserError from '../utils/Errors/Duplicate-error.js';

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {

            if (error.code == 11000) {
                throw new UserError('BAd request', 'user already exists');
            }
            throw error;
        }
    }
}

export default UserService;