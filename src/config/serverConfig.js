const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    MONGO_SERVER_URL: process.env.MONGO_SERVER_URL
}