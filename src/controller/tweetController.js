import TweetService from '../service/tweet-service.js'
const tweetService = new TweetService();

import upload from '../config/file-upload-awss3-config.js';

const singleUploader = upload.array('images', 2);

import { StatusCodes } from 'http-status-codes';

const createTweet = async (req, res) => {
    try {
        singleUploader(req, res, async function(err, data) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    error:err
                });
            }

            const imageUrls = req.files.map(file => file.location);
            const payload = {...req.body,
                imageUrl: imageUrls
            };
            const tweet = await tweetService.createTweet(payload);
            return res.status(StatusCodes.OK).json({
                data:tweet,
                success:true,
                message:'successfully created tweet',
                error:{}
            });     
        });
        
    } catch (error) {
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

const tweetWithComments = async (req, res) => {
    try {
        const tweet = await tweetService.getTweetsWithComments(req.body);
        return res.status(StatusCodes.OK).json({
            data:tweet,
            success:true,
            message:'successfully fetched tweets woth comments',
            error:{}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:'unable to fetch tweets woth comments',
            error:error
        });
    }
}

export default {
    createTweet,
    getTweets,
    getTweet,
    tweetPagination,
    tweetWithComments
}