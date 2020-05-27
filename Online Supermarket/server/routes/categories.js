const express = require('express');
const router = express.Router();
const { Category } = require("../models/Category");

const { auth } = require("../middleware/auth");

router.post("/uploadCategory", auth, (req, res) => {

    // ruajtja e te dhenave qe i marrim nga admini brenda DB-s

    const category = new Category(req.body)

    category.save((err) => {
        if(err) return res.status(400).json({ success: false, err })

        return res.status(200).json({ success: true })
    })
});

router.post("/getCategories", auth, (req, res) => {

    Category.find()
        .exec(( err, categories) => {
            if(err) return res.status(400).json({ success: false, err})

            return res.status(200).json({ success: true, categories})
        })
});


module.exports = router;