const mongoose = require('mongoose');

const { MONGO_SERVER_URL } = require('./serverConfig');

const connect =  async () => {
    try {
        await mongoose.connect(MONGO_SERVER_URL);
        console.log('mogoose server connected');
    } catch (error) {
        console.log('failed to connect to mongoose',error);
    }
}

module.exports = connect ;