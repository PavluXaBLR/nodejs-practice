
const express = require('express');
// const PostModel = require('../models/post');
const controller = require('../controllers/categories');
const router = express.Router();

router.get('/category', controller.find);
router.get('/category/:id', controller.findOne);
router.post('/category', controller.create);
router.patch('/category/:id', controller.update);
router.delete('/category/:id', controller.remove);

module.exports = router

// router.get('/category', (req, res) => {
//     CategoryModel
//         .find()
//         .then((post) => {
//             res.json(post)
//         })
//         .catch((error) => {
//             res.status(400).json({ error: error.message })
//         })
// })

// router.post('/category', (req, res) => {
//     const post = new CategoryModel(req.body)
//     post
//         .save()
//         .then((post) => {
//             res.json(post);
//         })
//         .catch((error) => {
//             res.status(400).json({ error: error.message })
//         })
// })

// // todo: update and remove

// module.exports = router