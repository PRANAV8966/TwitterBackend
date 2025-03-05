import mongoose from 'mongoose';

import { MONGO_SERVER_URL } from './serverConfig.js'

const connect =  async () => {
    try {
        await mongoose.connect(MONGO_SERVER_URL);
        //await mongoose.set('autoIndex', false);
        console.log('mogoose server connected');
    } catch (error) {
        console.log('failed to connect to mongoose',error);
    }
}

export default connect ;