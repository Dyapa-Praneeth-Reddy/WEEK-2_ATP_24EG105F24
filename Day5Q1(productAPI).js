///////////////////////////////////// --product API-- ////////////////////////////
// Create REST API for Product resource with below operations:

 
//         1. Create new Product({productId,name,brand,price})
//         2. Read all products
//         3. Read all Product by brand
//         4. Update a product
//         5. Delete a product by id

import exp from "express";
export const productApp = exp.Router();

productApp.use(exp.json());

//create product api with below operations
let products = [];
// Task 1: Create new Product({productId,name,brand,price})
productApp.post('/product', (req, res) => {
    //get product from client
    const newProduct = req.body;
    //push product into products
    products.push(newProduct);
    //send res
    res.json({ message: "product created successfully", product: newProduct });
});
// Task 2: Read all products
productApp.get('/products', (req, res) => {
    //send response to client
    res.json({ message: "all products", products: products });
});
// Task 3: Read all Product by brand
productApp.get('/products/brand/:brand', (req, res) => {
    //get brand from url parameter
    let brandOfUrl = req.params.brand;
    //find product by brand
    let foundProduct = products.find((productObj) => productObj.brand === brandOfUrl);
    if (!foundProduct) {
        return res.json({ message: "product not found" });
    }
    //send response to client
    res.json({ message: "product found", payload: foundProduct });
});
// Task 4: Update a product
productApp.put('/products', (req, res) => {
    //get modified product from client
    const modifiedProduct = req.body;
    //get index of existing product in products array
    let index = products.findIndex((productObj) => productObj.productId === modifiedProduct.productId);
    //if product not found
    if (index === -1) {
        return res.json({ message: "product not found" });
    }
    //update product with index
    products.splice(index, 1, modifiedProduct);
    //send res to client
    res.json({ message: "product updated successfully", updated_product: modifiedProduct });
});
// Task 5: Delete a product by id
productApp.delete('/products/:id', (req, res) => {
    //get id of product from url parameter
    let idOfUrl = Number(req.params.id);
    //find index of product
    let index = products.findIndex((productObj) => productObj.productId === idOfUrl);
    //if product not found
    if (index === -1) {
        return res.json({ message: "product not found" });
    }
    //delete product by index
    products.splice(index, 1);
    //send res
    res.json({ message: "product deleted successfully" });
});