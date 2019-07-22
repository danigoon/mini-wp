if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes')
const port = 3000;
const app = express()

mongoose.connect('mongodb://localhost:27017/vue-miniwp',{useNewUrlParser: true}, function(err){
    if (err) {
        console.log(err)
    }else {
        console.log('mongoose connect.')
    }
})
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use('/', routes)
app.use((err,req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message
    })
})


app.listen(port, () => {
    console.log('listening on port: ' + port)
})