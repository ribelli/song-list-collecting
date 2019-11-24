const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SongSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100,
        validate: {
            validator: function (text) {
                return true;
            },
            message: 'Name is non valid',
        }
    },
    artist: {
        type: String,
        required: true,
        max: 100
    },
});


// Export the model
module.exports = mongoose.model('Song', SongSchema);
