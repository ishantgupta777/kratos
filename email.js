require('dotenv').config()

const key = process.env.SENDGRID_KEY
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(key)

const sendWelcomeEmail = (body) => {
    sgMail.send({
        to: 'ishantgupta777@gmail.com',
        from: 'ishantgupta777@gmail.com',
        subject: 'New Message On Kratos Website',
        text: `name : ${body.name}
                email : ${body.email}
                subject : ${body.subject}
                message : ${body.message}
                
                For any development queries or improvements, contact Ishant at ishantgupta777@gmail.com
                `
    })
}

module.exports = {
    sendWelcomeEmail
}