const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const sendMail = require('./email')


const publicPath = path.join(__dirname, './client')

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static(publicPath))


const port = process.env.PORT

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${port}`)
})

app.get('/', (req, res) => {
    console.log(111)
    res.sendFile(publicPath)
})

app.post('/contact', (req, res) => {
    sendMail.sendWelcomeEmail(req.body)
    res.status(200).send()
})