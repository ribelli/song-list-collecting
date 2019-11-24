const Song = require('../models/song');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.song_create = function (req, res) {
    let song = new Song(
        {
            name: req.body.name,
            artist: req.body.artist
        }
    );

    song.save(function (err) {
        if (err) throw err;
        res.send('Song Created successfully')
    })
};

exports.song_details = function (req, res) {
    Song.find({}).exec(function (err, songs) {
        if (err) throw err;
        res.send(songs);
    })
};

exports.song_artist_details = function (req, res) {
    let query = {};
    let query_keys = Object.keys(req.query);

    if(req.query[query_keys[0]]) {
        query[query_keys[0]] = req.query[query_keys[0]];
    }

    Song.find(query).exec(function (err, songs) {
        if (err) throw err;
        res.send(songs);
    })
};
