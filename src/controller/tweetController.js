const TweetService = require('../service/tweet-service');
const tweetService = new TweetService();

const { StatusCodes } = require('http-status-codes');

const createTweet = async (req, res) => {
    try {
        const tweet = await tweetService.createTweet(req.body);
        return res.status(StatusCodes.OK).json({
            data:tweet,
            success:true,
            message:'successfully created tweet',
            error:{}
        });
    } catch (error) {
        console.log('at controller', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:'unable to create tweet',
            error:error
        });
    }
}

const getTweets = async (req, res) => {
    try {
        const tweets = await tweetService.getTweets();
        return res.status(StatusCodes.ACCEPTED).json({
            data:tweets,
            success:true,
            message:'successfully fetched tweets',
            error:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:'failed to fetch tweets',
            error:error
        });
    }
}

const getTweet = async (req, res) => {
    try {
        const tweet = await tweetService.getTweet(req.body);
        return res.status(StatusCodes.ACCEPTED).json({
            data:tweet,
            success:true,
            message:'successfully fetched tweets',
            error:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:'failed to fetch the tweet',
            error:error
        });
    }
}

const tweetPagination = async (req, res) => {
    try {
        const pagedTweet = await tweetService.tweetPagination(req.body);
        return res.status(StatusCodes.OK).json({
            data:pagedTweet,
            success:true,
            message: 'successfully fetched the tweets',
            error:{}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:'failed to fetch tweets',
            error:error
        });
    }
}

module.exports = {
    createTweet,
    getTweets,
    getTweet,
    tweetPagination
}