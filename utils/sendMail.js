const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',

  auth: {
    user: 'rwegasira.chris@gmail.com',
    pass: process.env.PASSWORD,
  },
})

const sendEmail = async (to) => {
  const info = await transporter.sendMail({
    from: 'rwegasira.chris@gmail.com', // sender address
    to: to, // list of receivers
    subject: 'Welcome to our newsletter', // Subject line
    text: 'Thank you for subscribing to our newsletter.', // plain text body
    html: '', // html body
  })

  return info
}

module.exports = sendEmail
