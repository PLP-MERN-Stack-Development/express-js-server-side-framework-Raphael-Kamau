const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    getStats
} = require('../controllers/productController');
const auth = require('../middleware/auth');
const validateProduct = require('../middleware/validation');

router.get('/', getAllProducts);
router.get('/search', searchProducts);
router.get('/stats', getStats);
router.get('/:id', getProductsById);
router.get('/', auth, validateProduct, createProduct);
router.get('/:id', auth, validateProduct, updateProduct);
router.get('/:id', auth, deleteProduct);

module.exports = router;
