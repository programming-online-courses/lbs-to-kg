const express = require('express')
const app = express()
const port = 3000

// todo - add env variable PORT for heroku

// todo - root path if u start it from root package.json

app.use(express.static('./public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})