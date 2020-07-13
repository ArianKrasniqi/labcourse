const mongoose = require("mongoose");
const { Category } = require("../models/Category");

exports.uploadCategory = (req, res) => {

  // ruajtja e te dhenave qe i marrim nga admini brenda DB-s

  const category = new Category(req.body)

  category.save((err) => {
      if(err) return res.status(400).json({ success: false, err })

      return res.status(200).json({ success: true })
  })
}

exports.getCategories = (req, res) => {

  Category.find()
      .exec(( err, categories) => {
          if(err) return res.status(400).json({ success: false, err})

          return res.status(200).json({ success: true, categories})
      })
}

exports.deleteCategory = async (req, res) => {
  try{
    const deletedCategory = await Category.deleteOne({ _id: req.body._id });
    console.log(deletedCategory)
    return res.status(200).json({
      message: "Category Deleted!"
    })
  }catch(err){
    console.log(err)
    return res.status(404).json(err)
  }
}