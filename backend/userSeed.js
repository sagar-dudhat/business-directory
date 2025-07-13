const mongoose = require('mongoose');
const fs = require('fs');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/business_directory');

const seedUsers = async () => {
  try {
    const rawData = JSON.parse(fs.readFileSync('./database/users.json', 'utf-8'));
    await User.insertMany(rawData);
    process.exit();
  } catch (err) {
    process.exit(1);
  }
};

seedUsers();
