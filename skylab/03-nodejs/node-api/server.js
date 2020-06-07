const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Initializing the app
const app = express();

// allowing our app to be accessed from all domains
app.use(cors());

// allowing the app to receive data in JSON format
app.use(express.json());

// Connecting to DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
  });

requireDir('./src/models');

// const Product = mongoose.model('Product');

// Routes
app.use('/api', require('./src/routes'));

app.listen(3001);