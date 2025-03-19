const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const BrandSolution = mongoose.model('BrandSolution', brandSchema);

module.exports = BrandSolution;
