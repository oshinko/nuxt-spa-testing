import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express()

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: [__dirname + '/rest.js'],
}

swaggerJsdoc(options).then(doc =>
  app.use('/spec', swaggerUi.serve, swaggerUi.setup(doc)))

/**
 * @openapi
 * /headers:
 *   get:
 *     description: Get all HTTP headers
 *     responses:
 *       200:
 *         description: Returns headers.
 */
app.get('/headers', (req, res) => {
  res.json(req.headers)
})

module.exports = app
