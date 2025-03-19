const express = require('express');
const { createBrand, getBrand ,getBrandById,deleteBrandById } = require('../controllers/brandSolution');

const router = express.Router();

router.post('/create', createBrand);
router.get('/all', getBrand);

router.get('/:id', getBrandById);
router.delete('/:id', deleteBrandById);

module.exports = router;


