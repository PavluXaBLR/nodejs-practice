
const express = require('express');
// const PostModel = require('../models/post');
const controller = require('../controllers/posts');
const router = express.Router();

router.get('/post', controller.find);
router.get('/post/:id', controller.findOne);
router.post('/post', controller.create);
router.patch('/post/:id', controller.update);
router.delete('/post/:id', controller.remove);








// router.get('/post', (req, res) => {
//     PostModel
//         .find()
//         // .populate('category')
//         .then((post) => {
//             res.json(post)
//         })
//         .catch((error) => {
//             res.status(400).json({ error: error.message })
//         })
// })

// router.post('/post', (req, res) => {
//     const post = new PostModel(req.body)
//     post
//         .save()
//         .then((post) => {
//             res.json(post);
//         })
//         .catch((error) => {
//             res.status(400).json({ error: error.message })
//         })
// })

module.exports = router