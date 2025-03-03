import Like from '../model/Likes-model.js';
import CrudRepository from './crud-repository.js';

class LikeRepository extends CrudRepository {
    constructor() {
        super(Like);
    }

    async create(data) {
        try {
            const like = await Like.create(data);
            return like;
        } catch (error) {
            throw error;    
        }
    }

    async getByUserAndTweet(data) {
        try {
            const response = await Like.findOne(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default LikeRepository;