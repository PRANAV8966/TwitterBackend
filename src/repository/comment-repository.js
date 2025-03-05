import Comment from '../model/comment-model.js';

import { CrudRepository } from './index.js';

class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }
}

export default CommentRepository;