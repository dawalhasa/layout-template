const express = require('express')
const logger = require('morgan')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const router = require('./route/router.js')
require('dotenv').config();
const PORT = process.env.PORT || 3000

const app = express();
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/images', express.static(path.join(__dirname, 'public/images')))
//middleware & log page

app.set('view engine', 'ejs');
app.use(logger('tiny'))

app.set('layout', 'layouts/allPage.ejs')

app.use(expressLayouts)
app.use(router)





app.listen(PORT, (req, res) => {
    console.log(`Server is runing on Port No. ${PORT}`);
})
app.use((req, res) => {
    res.status(404).render('404')
})