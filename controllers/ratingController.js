const db = require('../models')

// model
const Rating = db.ratings

// functions

//1. Add Rating

const addRating = async (req, res) => {

    const id = req.params.id

    let data = {
        song_id: id,
        rate: req.body.rate,
    }

    const rating = await Review.create(data)
    res.status(200).send(rating)

}

// 2. Get All Ratings

const getAllRatings = async (req, res) => {

    const ratings = await Review.findAll({})
    res.status(200).send(ratings)

}

module.exports = {
    addRating,
    getAllRatings
}