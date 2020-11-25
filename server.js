if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
var cors = require('cors');
const axios = require('axios')
const app = express()
app.use(cors());
const port = 3000

app.get('/', (req, res) => {

  const API_KEY = process.env.API_KEY
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='

  axios.get(url + API_KEY)
    .then(response => {
      res.send(response.data.data)
      return response.data.data
    })
    .catch(error => console.error(error.message))

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

