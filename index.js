const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const song = require('./routes/song'); // Imports routes for the products
const app = express();

let dev_db_url = 'mongodb://localhost:27017/song-list';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/song-list', song);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
