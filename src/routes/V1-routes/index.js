import express from 'express';
const router = express.Router();

import commentController from '../../controller/comment-controller.js';
import tweetController from '../../controller/tweetController.js';
import userController from '../../controller/user-controller.js'

router.post('/tweet', tweetController.createTweet);

router.get('/tweet', tweetController.tweetWithComments);
router.get('/tweets', tweetController.tweetPagination);


router.post('/comment', commentController.create);

router.post('/user', userController.createUser);

export default router;