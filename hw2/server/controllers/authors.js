
const Author = require('../models/author');


module.exports.find = async function (req, res) {
   try {
      const authors = await Author.find()
      res.status(200).json(authors)
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
};

module.exports.findOne = async function (req, res) {
   try {
      const author = await Author.findById(req.params.id)
      res.status(200).json(author)
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
},

module.exports.create = async function (req, res) {
   try {
      const author = await new Author(req.body)
      await author.save()
      res.status(200).json(author)
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
    
};

module.exports.update = async function (req, res) {
   try {
      const author = await Author.findByIdAndUpdate(req.params.id, req.body)
      await author.save()
      res.json({message:'Update author'})
}
   
   catch (error) {
      res.status(400).json({ error: error.message })
   }
   
    
};


module.exports.remove = async function (req, res) {
   try {

      const author = await Author.findByIdAndRemove(req.params.id)
      if (!author) {
         res.status(404).send('Not found')
      }
      
      res.status(200).json({ message: `The post was deleted`})
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
}


