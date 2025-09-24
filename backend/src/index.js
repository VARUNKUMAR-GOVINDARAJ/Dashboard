const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const userRoutes = require('../routes/userRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(helmet()); // Security
app.use(cors());   // CORS for all routes
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
