const Product = require("../models/Product");
const multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`)
  },
  fileFilter: (req, file, cb) => {
      const ext = this.path.extname(file.originalname)
      if (ext !== '.jpg' || ext !== '.png') {
          return cb(res.status(400).end('only png and jpg'), false);
      }
      cb(null, true)
  }
})

var upload = multer({storage: storage}).array("file", 2)

exports.uploadImage = (req, res) => {

  upload(req, res, err => {
      if(err) return res.json({ success: false, err })
      console.log(res)
      // console.log(res.req)
      return res.json({ success: true, image: res.req.file, filename: res.req.file })
  })
}

exports.uploadProduct = (req, res) => {

  // ruajtja e te dhenave qe i marrim nga admini brenda DB-s

  const product = new Product(req.body)

  product.save((err) => {
      if(err) return res.status(400).json({ success: false, err })

      return res.status(200).json({ success: true })
  })
}

exports.getProducts = (req, res) => {

  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);

  let term = req.body.searchTerm;

  if(term) {
      Product.find()
      .find({ $text: { $search: term }})
      .populate("writer")
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec(( err, products) => {
          if(err) return res.status(400).json({ success: false, err})

          return res.status(200).json({ success: true, products, postSize: products.length })
      })
  } else {
      Product.find()
      .sort([[sortBy, order]])
      // .skip(skip)
      .limit(limit)
      .exec(( err, products) => {
          if(err) return res.status(400).json({ success: false, err})

          return res.status(200).json({ success: true, products, postSize: products.length })
      })
  }

}

exports.getProductById = (req, res) => {
  let type = req.query.type;
  let productIds = req.query.id;

  if (type === "array") {

  } 


  // duhet me e gjete detajet e produktit qe i perkasin id se produktit

  Product.find({'_id': { $in: productIds }})
      .populate('writer')
      .exec((err, product) => {
          if (err) 
              return res.status(400).send(err)

              return res.status(200).send(product) 
      })
}

exports.deleteProduct = async (req, res) => {
  try{
    const deletedProduct = await Product.deleteOne({ _id: req.body._id });
    console.log(deletedProduct)
    return res.status(200).json({
      message: "Product Deleted!"
    })
  }catch(err){
    console.log(err)
    return res.status(404).json(err)
  }
}