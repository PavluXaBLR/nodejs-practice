const express = require('express');
const controller = require('../controllers/authors');
const router = express.Router();

router.get('/author', controller.find);
router.get('/author/:id', controller.findOne);
router.post('/author', controller.create);
router.patch('/author/:id', controller.update);
router.delete('/author/:id', controller.remove);

module.exports = router