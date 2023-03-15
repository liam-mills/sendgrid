// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

// reference: https://app.sendgrid.com/guide/integrate/langs/nodejs

const sgMail = require('@sendgrid/mail')
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: process.env.EMAIL_TO,
  from: process.env.EMAIL_FROM,
  subject: 'SendGrid Test via Node',
  text: 'Email content',
  html: '<strong>Email content</strong>',
}

// Send email
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })