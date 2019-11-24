const express = require('express');
const router = express.Router();

const song_controller = require('../controllers/song');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', song_controller.test);

router.post('/create', song_controller.song_create);

router.get('/get', song_controller.song_details);

router.get('/get-by-artist', song_controller.song_artist_details);

module.exports = router;

