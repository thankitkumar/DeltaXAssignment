// import controllers rating, songs
const songController = require('../controllers/songController.js')
const ratingController = require('../controllers/ratingController')


// router
const router = require('express').Router()


// use routers
router.post('/addSong', songController.upload , songController.addSong)

router.get('/allSongs', songController.getAllSongs)




// Rating Url and Controller

router.get('/allRatings', ratingController.getAllRatings)
router.post('/addRating/:id', ratingController.addRating)

// get songs Ratings
router.get('/getSongRatings/:id', songController.getSongRatings)




// Songs router
router.get('/:id', songController.getOneSong)

router.put('/:id', songController.updateSong)

module.exports = router