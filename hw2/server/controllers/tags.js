const Tag = require ('../models/tag');


module.exports.find = async function (req, res) {
   try {
      const tag = await Tag.find()
      res.status(200).json(tag)
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
};

module.exports.findOne = async function (req, res) {
   try {
      const tag = await Tag.findById(req.params.id)
      res.status(200).json(tag)
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
},

module.exports.create = async function (req, res) {
   try {
      const tag = await new Tag(req.body)
      await tag.save()
      res.status(200).json(tag)
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
    
};

module.exports.update = async function (req, res) {
   try {
      const tag = await Tag.findByIdAndUpdate(req.params.id, req.body)
      await tag.save()
      res.json({message:'Update tag'})
}
   
   catch (error) {
      res.status(400).json({ error: error.message })
   }
};

module.exports.remove = async function (req, res) {
   try {

      const tag = await Tag.findByIdAndRemove(req.params.id)
      if (!tag) {
         res.status(404).send('Not found')
      }
      
      res.status(200).json({ message: `The tag was deleted`})
   }
   catch (error) {
      res.status(400).json({ error: error.message })
   }
}