import express from 'express';
const app = express();

import passport from 'passport';
import { passportAuth } from './middleware/jwt-middleware.js';

import { PORT } from './config/serverConfig.js';

import connect from './config/database-config.js';
import apiRoutes from './routes/index.js'

const startServer = async () => {

    app.use(express.urlencoded({extended:true}));

    await connect();
    app.use(passport.initialize());
    passportAuth(passport);
    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`server started on PORT: ${PORT}` );
    })
}

startServer();