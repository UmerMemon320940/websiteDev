require('dotenv').config()
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Wash', (req, res) => {
    res.send('<option>heloo</option>')
  })

  app.get('/youtube', (req, res) => {
    res.send(src = "https:www.yotube.com")
  } )

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})