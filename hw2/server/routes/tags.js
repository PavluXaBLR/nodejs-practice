const express = require('express');
// const PostModel = require('../models/post');
const controller = require('../controllers/tags');
const router = express.Router();

router.get('/tag', controller.find);
router.get('/tag/:id', controller.findOne);
router.post('/tag', controller.create);
router.patch('/tag/:id', controller.update);
router.delete('/tag/:id', controller.remove);

module.exports = router