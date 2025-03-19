
const BrandSolution = require('../models/brandSolution');

// post
const createBrand = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const newBrand = new BrandSolution({
      title,
      description
    });

    await newBrand.save();

    res.status(201).json({ 
      success: true,
      message: 'BrandSolution created successfully',
      data: newBrand
    });
  } catch (error) {
    console.error('Error creating BrandSolution:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// get all

const getBrand = async (req, res) => {
    try {
     
  
      const brand = await BrandSolution.find();
  
      if (brand.length === 0) {
        return res.status(404).json({ message: 'No brand found' });
      }
  
      res.status(200).json({
        success: true,
        data: brand
      });
    } catch (error) {
      console.error('Error fetching brand:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  


// Get brand by ID
const getBrandById = async (req, res) => {
  try {
    const { id } = req.params;

    const brand = await BrandSolution.findById(id);

    if (!brand) {
      return res.status(404).json({ message: 'brand not found' });
    }

    res.status(200).json({
      success: true,
      data: brand
    });
  } catch (error) {
    console.error('Error fetching brand by ID:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};



// Delete brand by ID
const deleteBrandById = async (req, res) => {
  try {
    const { id } = req.params;

    const brand = await BrandSolution.findByIdAndDelete(id);

    if (!brand) {
      console.log('❌ brand Not Found');
      return res.status(404).json({ message: 'brand not found' });
    }

    console.log('✅ brand Deleted:', brand);

    res.status(200).json({
      success: true,
      message: 'brand deleted successfully',
      data: brand
    });
  } catch (error) {
    console.error('❌ Error deleting brand:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


  
  module.exports = { createBrand, getBrand ,getBrandById,deleteBrandById};
  






