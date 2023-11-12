const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',

  auth: {
    user: 'rwegasira.chris@gmail.com',
    pass: process.env.PASSWORD,
  },
})

const sendEmail = async () => {
  const info = await transporter.sendMail({
    from: 'rwegasira.chris@gmail.com', // sender address
    to: 'ac.rwegasira@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  })

  return info
}

module.exports = sendEmail
