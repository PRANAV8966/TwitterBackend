const express = require('express');
const app = express();

const { PORT } = require('./config/serverConfig.js');

const connect = require('./config/database-config.js');

const tweetController  = require('./controller/tweetController.js');

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