const Story = require("../Model/storySchema");

exports.createStory = async (req, res) => {
  try {
    const newStory = await Story.create(req.body);
    res.status(201);
    res.send(newStory);
  } catch (error) {
    console.log(error)
    res.status(400)
  }
};

exports.getAllStories= async (req , res) =>{
    try {
        const stories = await Story.find()
        res.status(200)
        res.send(stories)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}
