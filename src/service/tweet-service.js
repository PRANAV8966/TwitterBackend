const TweetRepository = require('../repository/tweet-repository');

class TweetService {

    constructor() {
        this.tweetRepository = new TweetRepository();
    }

    async createTweet(data) {
        try {
            const tweet = await this.tweetRepository.createTweet(data);
            return tweet;
        } catch (error) {
            console.log('at service', error);
            throw error;
        }
    }

    async getTweets() {
        try {
            const tweets = await this.tweetRepository.getTweets();
            return tweets;
        } catch (error) {
            throw error;
        }
    }

    async getTweet(filterData) {
        try {
            const tweet = await this.tweetRepository.getTweet(filterData);
            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async tweetPagination(filterData) {
        try {
            const pagedTweet = await this.tweetRepository.tweetPagination(filterData);
            if (!(pagedTweet && pagedTweet.length == 0)) return pagedTweet;
            else throw {error:'please check the pagination values'};
        } catch (error) {
            throw error;
        }
    }
    
}
module.exports = TweetService;