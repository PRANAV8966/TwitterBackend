import Like from '../model/Likes-model.js';
import { CrudRepository } from './index.js';

class LikeRepository extends CrudRepository {
    constructor() {
        super(Like);
    }
}

export default LikeRepository;