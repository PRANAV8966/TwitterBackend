import express from 'express';
const router = express.Router();

import v1Routes from './V1-routes/index.js';

router.use('/v1', v1Routes)

export default router;