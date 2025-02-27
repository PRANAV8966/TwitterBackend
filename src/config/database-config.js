const mongoose = require('mongoose');

const connect =  async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Twitter_dev');
        console.log('mogoose server connected');
    } catch (error) {
        console.log('failed to connect to mongoose',error);
    }
}

module.exports = connect ;