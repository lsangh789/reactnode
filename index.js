const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sanghyun:abcd1234@zsangh789.ytgevic.mongodb.net/?retryWrites=true&w=majority', {}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 이상현임.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})