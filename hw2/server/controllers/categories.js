const Category = require('../models/category');

module.exports.find = async function (req, res) {
   try {
      const categories = await Category.find()
      res.status(200).json(categories)
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
};

module.exports.findOne = async function (req, res) {
   try {
      const category = await Category.findById(req.params.id)
      res.status(200).json(category)
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
},

module.exports.create = async function (req, res) {
   try {
      const category = await new Category(req.body)
      await category.save()
      res.status(200).json(category)
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
    
};

module.exports.update = async function (req, res) {
   try {
      const category = await Author.findByIdAndUpdate(req.params.id, req.body)
      await category.save()
      res.json({message:'Update category'})
}
   
   catch (error) {
      res.status(400).json({ error: error.message })
   }
};

module.exports.remove = async function (req, res) {
   try {

      const category = await Category.findByIdAndRemove(req.params.id)
      if (!category) {
         res.status(404).send('Not found')
      }
      
      res.status(200).json({ message: `The category was deleted`})
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
}
