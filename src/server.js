const express = require('express');
const bodyParser = require('body-parser');


const app = express()

const userRoutes = require('./routes/userRoutes')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(userRoutes)

app.listen(3002, () => {
    console.log('server is listening on 3002')
})