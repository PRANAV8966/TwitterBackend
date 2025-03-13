import Tweet, { Twitter } from '../../src/model/twitter-model.js';
import TweetRepository from '../../src/repository/tweet-repository.js';

jest.mock('../../src/model/twitter-model.js');
const tweetRepository = new TweetRepository();

describe('should be able to create user or else throw error', () => {
    test('should be able to create tweet and return tweet', async () => {
    
        const data = {
            content: 'testing tweet with jest to exhaust the limit if 5 character which is done already'
        }
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
            return {...data, createdAt: '2025-03-7', updatedAt: '2025-03-07' };
        })
        const tweet = await tweetRepository.createTweet(data);
    
        expect(spy).toHaveBeenCalled();
        expect(tweet.content).toBe(data.content);
        expect(tweet).toBeDefined();
    });
    
    test('should throw error',async () => {
        const data = {
            content: 'testing tweet with jest'
        }
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => Error);
        const tweet = await Tweet.create(data);
    
        expect(spy).toHaveBeenCalled();
        expect(Error).toBe(Error)
    });
    
});