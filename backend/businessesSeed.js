const mongoose = require('mongoose');
const fs = require('fs');
const Business = require('./models/Business'); // Adjust if path is different

mongoose.connect('mongodb://localhost:27017/business_directory');

async function seedData() {
  try {
    const data = JSON.parse(fs.readFileSync('./database/businesses.json', 'utf-8'));
    await Business.insertMany(data);
    console.log('Seeded businesses successfully!');
    process.exit();
  } catch (err) {
    console.error('Error seeding data:', err.message);
    process.exit(1);
  }
}

seedData();
