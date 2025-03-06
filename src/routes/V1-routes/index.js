import express from 'express';
const router = express.Router();

import commentController from '../../controller/comment-controller.js';
import tweetController from '../../controller/tweetController.js';
import userController from '../../controller/user-controller.js';
import { isAuthenticated } from '../../middleware/isAuthenticated.js';

router.post('/tweet',isAuthenticated ,tweetController.createTweet);

router.get('/tweet', tweetController.tweetWithComments);
router.get('/tweets', tweetController.tweetPagination);


router.post('/comment',isAuthenticated, commentController.create);

router.post('/user', userController.signUp);
router.post('/user/login', userController.signIn);

export default router;