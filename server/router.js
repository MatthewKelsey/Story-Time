const Router = require("express");
const storyCTRL = require('./Controller/storyController')
const router = Router()


router.post('/stories', storyCTRL.createStory)
router.get('/stories', storyCTRL.getAllStories)

module.exports = router