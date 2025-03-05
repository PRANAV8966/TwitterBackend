import express from 'express';
const app = express();

import { PORT } from './config/serverConfig.js';

import connect from './config/database-config.js';
import apiRoutes from './routes/index.js'

const startServer = async () => {

    app.use(express.urlencoded({extended:true}));

    app.listen(PORT, () => {
        console.log(`server started on PORT: ${PORT}` );
    })
    await connect();

    app.use('/api', apiRoutes);
}

startServer();