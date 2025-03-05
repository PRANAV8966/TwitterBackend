import Tweet from '../model/twitter-model.js';


class TweetRepository {

    async createTweet(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async getTweets() {
        try {
            const tweets = await Tweet.find().populate();
            return tweets;
        } catch (error) {
            throw error;
        }
    }

    async getTweet(id) {
        try {
            const tweet = await Tweet.findById(id).populate();
            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async getTweetWithComment(TweetId) {
        try {
            const tweet = await Tweet.findById(TweetId.id).populate({path:'comments'});
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async tweetPagination(filterData) {
        try {
            const pagedTweet = await Tweet.find().skip(filterData.offset).limit(filterData.limit);
            return pagedTweet;
        } catch (error) {
            throw error;
        }
    }
}

export default TweetRepository;