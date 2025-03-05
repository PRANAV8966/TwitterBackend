import User from '../model/user-model.js';
import CrudRepository  from './crud-repository.js';

class UserRepository extends CrudRepository {
    constructor () {
        super(User);
    }

    async getUserByEmail(email) {
        try {
            const user = await User.findOne({userEmail: email});
            return user;
        } catch (error) {
            throw error;
        }
    }
}

export default UserRepository;