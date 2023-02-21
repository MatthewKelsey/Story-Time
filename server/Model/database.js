require("dotenv").config();

const password = process.env.MONGODB_CREDENTIALS;
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect(password).then(console.log("Connected to database"));

module.exports = mongoose;
