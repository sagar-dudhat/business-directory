const express = require('express');
const router = express.Router();
const Business = require('../models/Business');
const verifyToken = require('../middleware/authMiddleware'); // auth middleware

// Add Business (Protected)
router.post('/', verifyToken, async (req, res) => {
  try {
    const { name, category, address, phone, website, description } = req.body;
    if (!name || !category) {
      return res.status(400).json({ msg: 'Name and category are required' });
    }

    const existing = await Business.findOne({ name, userId: req.user.id });
    if (existing) {
      return res.status(409).json({ msg: 'You already added a business with this name' });
    }

    const newBiz = new Business({
      ...req.body,
      userId: req.user.id
    });
    await newBiz.save();
    res.json({ msg: 'Business added successfully', business: newBiz });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to add business', error: err.message });
  }
});

// Get All Businesses (Public)
router.get('/', async (req, res) => {
  try {
    const businesses = await Business.find().sort({ createdAt: -1 });
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching businesses' });
  }
});

// Get Business by ID (Public)
router.get('/:id', async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) return res.status(404).json({ msg: 'Business not found' });
    res.json(business);
  } catch (err) {
    res.status(500).json({ msg: 'Error retrieving business' });
  }
});

// Get Logged-in User's Businesses (Protected)
router.get('/my', verifyToken, async (req, res) => {
  try {
    const businesses = await Business.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch your businesses' });
  }
});


// Update Business (Protected)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) return res.status(404).json({ msg: 'Business not found' });

    if (business.userId.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Not authorized to update this business' });
    }

    Object.assign(business, req.body);
    await business.save();

    res.json({ msg: 'Business updated successfully', business });
  } catch (err) {
    res.status(500).json({ msg: 'Error updating business', error: err.message });
  }
});

// Delete business
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) return res.status(404).json({ msg: 'Business not found' });

    if (business.userId.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Not authorized to delete this business' });
    }

    await business.deleteOne();
    res.json({ msg: 'Business deleted successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Error deleting business' });
  }
});

module.exports = router;
