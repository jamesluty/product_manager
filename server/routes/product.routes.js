const ProductController = require("../controllers/product_controller");

module.exports = app => {
    app.get("/api/products/", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.put("/api/products/:id", ProductController.updateAProduct);
    app.post("/api/products", ProductController.createAProduct);
    app.delete("/api/products/:id", ProductController.deleteAProduct);
};