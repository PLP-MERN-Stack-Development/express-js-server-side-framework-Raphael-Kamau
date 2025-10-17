require('dotenv').config();
const express = require('express');
const app = express();
const productRoutes = require('.routes/productRoutes');
const { errorHandler } = require('./utils/errorHandler');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/products', productRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));