const { StatusCodes } = require('http-status-codes')
const Subscriber = require('../Modules/subscriber')
const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  UnauthorizedError,
  CustomError,
} = require('../Error')

const sendEmail = require('../utils/sendMail')
const addSubscriber = async (req, res, next) => {
  const { fname, lname, email } = req.body
  // check if subscriber exits already
  const exist = await Subscriber.findOne({ email: email })
  if (exist) throw new BadRequestError('You are already a subscriber.')
  const subscriber = new Subscriber({ fname, lname, email })
  await subscriber.save()
  //send notification email to subscriber
  sendEmail()
  res.status(StatusCodes.OK).json({ msg: 'Successfully registered.' })
}

module.exports = {
  addSubscriber: addSubscriber,
}
