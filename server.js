if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express')
const cors = require('cors');
const axios = require('axios')
const path = require('path')
let favicon = require('serve-favicon');

const port = 3000
const app = express()
app.use(cors());
app.use(express.static(path.join(__dirname, 'client')));
app.use(favicon(path.join(__dirname, 'client', 'favicon.ico')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'))
})

app.get('/api/', (req, res) => {
  const API_KEY = process.env.API_KEY
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY='

  axios.get(url + API_KEY)
    .then(response => {
      res.send(response.data.data)
      return response.data.data
    })
    .catch(error => console.error(error.message))
})


app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})

