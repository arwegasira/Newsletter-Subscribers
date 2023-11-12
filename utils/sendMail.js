const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'leta.kunde@ethereal.email',
    pass: '8xKt7AzseG9CZTDXnr',
  },
})

const sendEmail = async () => {
  const info = await transporter.sendMail({
    from: 'leta.kunde@ethereal.email', // sender address
    to: 'ac.rwegasira@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  })

  return info
}

module.exports = sendEmail
