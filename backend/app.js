const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const mongoose = require('mongoose');
const businessRoutes = require('./routes/business');

const app = express();
const PORT = process.env.PORT || 5000;

// Use middlewares FIRST
app.use(cors());
app.use(express.json());

// Then define routes
app.use('/api/auth', authRoutes);
app.use('/api/business', businessRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

mongoose.connect('mongodb://127.0.0.1:27017/business-directory');

app.listen(PORT);