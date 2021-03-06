require('dotenv').config()

const key = process.env.SENDGRID_KEY
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(key)

const sendWelcomeEmail = (body) => {
    sgMail.send({
        to: 'kratosbitsgoa@gmail.com',
        from: 'ishantgupta777@gmail.com',
        subject: 'New Message On Kratos Website',
        text: `name : ${body.name}
                email : ${body.email}
                message : ${body.text}
                
                For any development queries or improvements, contact Ishant at ishantgupta777@gmail.com
                `
    })
}

module.exports = {
    sendWelcomeEmail
}