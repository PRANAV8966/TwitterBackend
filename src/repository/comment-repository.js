import Comment from '../model/comment-model.js';

import { CrudRepository } from './index.js';

class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }

    async findComment(id) {
        try {
            const comment = await Comment.findOne({_id: id});
            return comment;
        } catch (error) {
            throw error;
        }
    }
}

export default CommentRepository;