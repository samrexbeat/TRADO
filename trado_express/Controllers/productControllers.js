const asyncHandler = require('express-async-handler');
const {createProductModel, getAllProducts, getProductById, updateProductModel, deleteProductModel} = require('../Models/prductModel')

// Get all products
// @route GET /products
// @access public
const getProducts = asyncHandler(async(req, res) => {
    const products =await getAllProducts()
    res.status(200).json(products);
});

// Get create new product
// @route POST /products
// @access public
const createProduct = asyncHandler(async(req, res) => {
    console.log("The request body:", req.body)
    const {name, description, point_vaule, image_name} = req.body;
    if(!name || !description || !point_vaule || !image_name) {
        res.status(400);
        throw new Error("All fields are required")
    }
    const product = await createProductModel.create({
        name,
        description,
        point_vaule,
        image_name

    })
    res.status(201).json(product);
});

// Get product
// @route GET /products/:id
// @access public
const getProduct =asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get Product for ${req.params.id}`});
});

// Get update product
// @route PUT /products/:id
// @access public
const updateProduct =asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update Product for ${req.params.id}`});
});


// Get delete product
// @route DELETE /products/:id
// @access public
const deleteProducts = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete Product for ${req.params.id}`});
});




module.exports = { getProducts, createProduct, getProduct, updateProduct, deleteProducts };
