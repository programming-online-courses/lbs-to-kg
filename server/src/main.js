const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;
const rootPath = "../";
const uiHtmlPath = path.resolve(__dirname, rootPath, 'public', 'index.html');
const cssAndGifsFiles = path.resolve(__dirname, rootPath, 'public')

app.use("/static", express.static(cssAndGifsFiles))

app.get("/", (req, res) => {
  res.sendFile(uiHtmlPath);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
