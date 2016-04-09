const fs = require('fs')
const screenshot = require('screenshot-stream')
const express = require('express')
const filenamify = require('filenamify')
const app = express()

app.get('/', function (req, res) {
  const options = req.query
  if (!req.query || Object.keys(req.query).length === 0) {
    return res.send(
      'You must send options as a query string with at least `url` and `size`. ' +
      'Learn more: https://github.com/kentcdodds/screenshot-stream-service'
    )
  }
  const filename = filenamify(req.query.filename || req.query.url + '.png', {replacement: '-'})
  res.header('Content-Type', 'image/png')
  res.header('Content-Disposition', `inline; filename="${filename}"`)
  const stream = screenshot(req.query.url, req.query.size, options)
  stream.pipe(res)
});

const port = app.get('port') || process.env.PORT || 3000
app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
