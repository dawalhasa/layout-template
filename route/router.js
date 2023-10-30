const express = require('express');
const router = express.Router();
const routeHandler = require('../controllers/routeHandler.js')

router.get('/home', routeHandler.home)
router.get('/about', routeHandler.about)
router.get('/profolio', routeHandler.profolio)
router.get('/project', routeHandler.project)
router.get('/contact', routeHandler.contact)

module.exports = router;