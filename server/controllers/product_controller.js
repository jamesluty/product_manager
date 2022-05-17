const Product = require("../models/product_model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(oneProduct => res.json({ product: oneProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createAProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({ product: newProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateAProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
