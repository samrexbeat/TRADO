const express = require('express');
const router = express.Router();
const {  getProducts, createProduct, getProduct, updateProduct, deleteProducts } = require('../Controllers/productControllers')

router.route('/').get(getProducts)

router.route('/').post(createProduct)

router.route('/:id').get(getProduct)

router.route('/:id').put(updateProduct)

router.route('/:id').delete(deleteProducts)

module.exports = router