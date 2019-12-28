const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const sendMail = require('./email')


const publicPath = path.join(__dirname, './client')

const app = express()
app.use(express.json())
app.use(express.static(publicPath))


const port = process.env.PORT

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(publicPath)
})

app.post('/contact', async (req, res) => {
    await sendMail.sendWelcomeEmail(req.body)
    res.status(200).send()
})