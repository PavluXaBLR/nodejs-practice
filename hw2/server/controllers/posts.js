const Post = require ('../models/post');


module.exports.find = async function (req, res) {
   try {
      const posts = await Post.find()
      res.status(200).json(posts)
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
};

module.exports.findOne = async function (req, res) {
   try {
      const post = await Post.findById(req.params.id)
      res.status(200).json(post)
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
},

module.exports.create = async function (req, res) {
   try {
      const post = await new Post(req.body)
      await post.save()
      res.status(200).json(post)
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
    
};

module.exports.update = async function (req, res) {
   try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body)
      await post.save()
      res.json({message:'Update post'})
}
   
   catch (error) {
      res.status(400).json({ error: error.message })
   }
};

module.exports.remove = async function (req, res) {
   try {

      const post = await Post.findByIdAndRemove(req.params.id)
      if (!post) {
         res.status(404).send('Not found')
      }
      
      res.status(200).json({ message: `The post was deleted`})
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
}

