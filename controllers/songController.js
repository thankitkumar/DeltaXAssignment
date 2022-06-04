const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')


// create main Model
const Song = db.songs
const Rating = db.ratings

// main work

// 1. create song

const addSong = async (req, res) => {

    let info = {
        image: req.file.path,
        song: req.body.song,
        dateOfRelease: req.body.dateOfRelease,
        artists: req.body.artists,
    }

    const song = await Song.create(info)
    res.status(200).send(song)
    console.log(song)

}



// 2. get all songs

const getAllSongs = async (req, res) => {

    let songs = await Song.findAll({})
    res.status(200).send(songs)

}

// 3. get single song

const getOneSong = async (req, res) => {

    let id = req.params.id
    let song = await Song.findOne({ where: { id: id }})
    res.status(200).send(song)

}

// 4. update Song

const updateSong = async (req, res) => {

    let id = req.params.id

    const song = await Song.update(req.body, { where: { id: id }})

    res.status(200).send(song)
   

}


// 5. connect one to many relation Song and Rating

const getSongRatings =  async (req, res) => {

    const id = req.params.id

    const data = await Song.findOne({
        include: [{
            model: Rating,
            as: 'rate'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}


// 6. Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')


module.exports = {
    addSong,
    getAllSongs,
    getOneSong,
    updateSong,
    getSongRatings,
    upload
    
}