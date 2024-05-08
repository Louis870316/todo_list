const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://lsd:lsd870316@cluster0.9slox1g.mongodb.net/todo-list?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true }) //設定連線到 mongoDB

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db