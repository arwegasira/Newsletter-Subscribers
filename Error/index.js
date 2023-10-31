const BadRequestError = require('./BadRequestError')
const NotFoundError = require('./NotFoundError')
const UnauthenticatedError = require('./UnauthenticatedError')
const UnauthorizedError = require('./UnauthorizedError')
const CustomError = require('./CustomError')

module.exports = {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  UnauthorizedError,
  CustomError,
}
