import { TweetRepository, HashTagRepository } from '../repository/index.js'

class TweetService {

    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashTagRepository = new HashTagRepository()
    }

    async createTweet(data) {
        try {
            const content = data.content;
            const tags = content.match(/(#[a-zA-Z0-9])\w+/g).map(tag => tag.substring(1).toLowerCase()); // Regex for extracting HashTags
            const tweet = await this.tweetRepository.createTweet(data);
        
            const PresentTags  = await this.GetAlreadyPresentTags(tags);

            const Newtags = await this.extractAndCreateNewTags(tags, PresentTags, tweet);

            return tweet;


            // let alreadyPresentTags = await this.hashTagRepository.getHashTags(tags);

            // const titleOfPresentTags = alreadyPresentTags.map(tag => tag.title);
            
            // let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
            // console.log(newTags);
            // newTags = newTags.map(tag => {
            //     return {title:tag, tweets: [tweet.id]};
            // });

            // await this.hashTagRepository.bulkCreate(newTags);

            // alreadyPresentTags.forEach((tag) => {
            //     tag.tweets.push(tweet.id);
            //     tag.save();
            // });
            

        } catch (error) {
            console.log('at service', error);
            throw error;
        }
    }

    async extractAndCreateNewTags(tags, obj, tweet) {
        try {
            let newTags = tags.filter((tag) => !obj.TitleOfPresentTags.includes(tag));

            newTags = newTags.map(tag => {
                return {title:tag, tweets: [tweet.id]};
            });

            await this.hashTagRepository.bulkCreate(newTags);
            obj.alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            });
            
            return newTags;
        } catch (error) {
            throw error;
        }
    }

    async GetAlreadyPresentTags(tags) {
        try {
            const alreadyPresentTags = await this.hashTagRepository.getHashTags(tags);
            let TitleOfPresentTags = alreadyPresentTags.map(tag => tag.title);
            return { TitleOfPresentTags, alreadyPresentTags};
        } catch (error) {
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

    async getTweet(id) {
        try {
            const tweet = await this.tweetRepository.getTweet(id);
            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async getTweetsWithComments(tweetId) {
        try {
            const tweetWithComments = await this.tweetRepository.getTweetWithComment(tweetId);
            return tweetWithComments;
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
export default TweetService;
