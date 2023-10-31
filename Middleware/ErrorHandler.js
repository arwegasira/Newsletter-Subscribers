const { StatusCodes } = require('http-status-codes')

const errorHandler = async (err, req, res, next) => {
  const customError = {
    message: err.message || 'Something went wrong',
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  }
  // mongoose error
  if (err.code === 11000) {
    customError.message = `Duplicated value for ${Object.keys(
      err.keyValue
    ).join(',')}`
    customError.statusCode = StatusCodes.BAD_REQUEST
  }
  if (err.name === 'ValidationError') {
    customError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
    customError.statusCode = StatusCodes.BAD_REQUEST
  }
  if (err.name === 'CastError') {
    customError.message = `No item found with id : ${err.value}`
    customError.statusCode = StatusCodes.NOT_FOUND
  }
  res.status(customError.statusCode).json({ msg: customError.message })
}

module.exports = errorHandler
