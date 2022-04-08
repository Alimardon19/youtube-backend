const { AuthorizationError, InternalServerError } = require('../utils/error.js')
const path = require("path")

const GET = (req, res, next) => {
    try {
        let videos = req.readFile("videos")
        let users = req.readFile('users') || []

        users = users.map(user => {
            delete user.password
            user.profileImage = "https://youtube-clone-uz.herokuapp.com/" + "images/" + user.profileImage  
            user.videos = videos.filter(el => user.userId == el.userId)
            return user
        })

        return res.status(200).json(users)

    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}

module.exports = {
    GET
}