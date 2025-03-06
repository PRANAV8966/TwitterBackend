import CommentRepository from "../repository/comment-repository.js";

import TweetRepository from '../repository/tweet-repository.js';

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(content, userId, modelType, modelId) {
        try {
            switch(modelType) {
                case 'Tweet':
                var commentedOn = await this.tweetRepository.getTweet(modelId);
                break;

                case 'Comment':
                var commentedOn = await this.commentRepository.findComment(modelId);
                break;

                default:
                throw new Error('unknown model type');
            }
            const comment = await this.commentRepository.create({
            content: content,
            userId: userId, 
            onModel: modelType,
            commentedOn: modelId,
            comments:[]
        });
        commentedOn.comments.push(comment);
        await commentedOn.save();

            return comment;
        } catch (error) {
            throw error;
        }
    }

    async get(commentId) {
        try {
            const response = await this.commentRepository.get(commentId);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.commentRepository.getAll();
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default CommentService;