//make a new router object
// var express = require('express')
var router = require('express').Router();

const apiRoutes = require('./apiRoutes');
router.use('/notes', apiRoutes);

module.exports = router;