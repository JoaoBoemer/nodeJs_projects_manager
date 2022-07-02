const express = require('express');
const router = express.Router();
const Controller = require('../controllers/index.js')

router.get('/', Controller.home);

router.post('/project/add', Controller.projectAdd);

router.get('/project/:id', Controller.projectDestroy);

router.post('/activity/add', Controller.activityAdd);

router.get('/activity/:id', Controller.activityDestroy);

module.exports = router;