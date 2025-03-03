import express from 'express';
const app = express();

import { PORT } from './config/serverConfig.js';

import connect from './config/database-config.js';
import tweetController from './controller/tweetController.js';

const startServer = async () => {

    app.use(express.urlencoded({extended:true}));

    app.listen(PORT, () => {
        console.log(`server started on PORT: ${PORT}` );
    })
    await connect();

    app.post('/api/v1/tweet', tweetController.createTweet);
    app.get('/api/v1/tweet', tweetController.getTweets);
    app.get('/api/v1/tweets', tweetController.tweetPagination);
}

startServer();