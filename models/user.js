const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Data.now
  }
})

module.exports = mongoose.model('User', todoSchema)