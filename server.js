const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('this is my new pjt  ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
