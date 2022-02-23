const Product = require('../Model/productModel');

module.exports.createProduct = async (req , res) => {
    try {
        const product = Product({
            designation:req.body.designation,
            quantite:req.body.quantite,
            prix:req.body.prix,
            devise:req.body.devise,
            categorie:req.body.categorie,
            dateprod:req.body.dateprod
        });
        const data = await product.save();
        res.status(200).json({Product:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showProduct = async (req , res) => {
    try {
        const product = await Product.findOne(req.body);
        const data = product;
        res.status(200).json({Product:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.updateProduct = async (req , res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.body._id,{$set:{
            designation:req.body.designation,
            quantite:req.body.quantite,
            prix:req.body.prix,
            devise:req.body.devise,
            categorie:req.body.categorie,
            dateprod:req.body.dateprod 
        }
        });
        res.status(200).json({Product:product});
    } catch (error) {
        res.status(500).json({err:error})
    }
}

module.exports.deleteProduct = async (req , res) => {
    try {
        const product = await Product.findOneAndDelete(req.body);
        const data = product;
        res.status(200).json({Product:data});
    } catch (error) {
        res.status(500).send("err");
    }
}