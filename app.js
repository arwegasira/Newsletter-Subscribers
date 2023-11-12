const express = require('express')

require('dotenv').config()
require('express-async-errors')
const app = express()

const port = process.env.PORT || 80

//db
const connect = require('./db/connect')

//middleware, not found , error handler
const notFound = require('./Middleware/notFoundMiddleware')
const errorHandler = require('./Middleware/ErrorHandler')

app.use(express.json())

//Import API Routes
const subscribe = require('./Routes/subscriber')

//use api routes
app.use('/api/v1', subscribe)
app.use(notFound)
app.use(errorHandler)

// start server
const start = async () => {
  try {
    await connect(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server is listening on port${port}`))
  } catch (error) {
    console.error(error)
  }
}

start()
