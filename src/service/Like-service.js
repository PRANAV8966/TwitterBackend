import { LikeRepository, TweetRepository }  from "../repository/index.js";


class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) {
        try {
            switch(modelType) {
                case 'Tweet':
                var tweet = await this.tweetRepository.getTweet(modelId);
                break;

                case 'Comment':
                console.log('no comment');
                break;

                default:
                throw new Error('unknown model type');
            }
            const exists = await this.likeRepository.getByUserAndTweet({
                userId: userId,
                onModel: modelType,
                likedOn: modelId
            });
            if (exists) {
                tweet.likes.pull(exists.id);
                await tweet.save();
                await exists.deleteOne();
                var isAdded = false;

            } else {
                const newLike = await this.likeRepository.create({
                    onModel:modelType,
                    likedOn:modelId,
                    userId: userId
                });
                tweet.likes.push(newLike.id);
                await tweet.save();
                var isAdded = true;
            }
            return isAdded;
            
        } catch (error) {
            throw error;
        }
    }
}

export default LikeService;