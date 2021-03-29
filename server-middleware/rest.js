const app = require('express')()

app.all('/headers', (req, res) => {
  res.json(req.headers)
})

module.exports = app
