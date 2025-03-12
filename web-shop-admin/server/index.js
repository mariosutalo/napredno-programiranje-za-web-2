import express from 'express'
import mysql from 'mysql2/promise'
import productRoutes from './routes/products.js';

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Create the connection to database
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'webshop',
  password: 'password'
});

app.locals.db = db

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Using routes
app.use('/products', productRoutes);



