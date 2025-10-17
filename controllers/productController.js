const { v4: uuidv4 } = require('uuid');
const { NotFoundError } = require('../utils/errors');

let products = [];

exports.getAllProducts = (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  let filtered = category ? products.filter(p => p.category === category) : products;
  const start = (page - 1) * limit;
  res.json(filtered.slice(start, start + parseInt(limit)));
};

exports.searchProducts = (req, res) => {
  const { name } = req.query;
  const results = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  res.json(results);
};

exports.getStats = (req, res) => {
  const stats = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  res.json(stats);
};

exports.getProductById = (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next(new NotFoundError('Product not found'));
  res.json(product);
};

exports.createProduct = (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError('Product not found'));
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
};

exports.deleteProduct = (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError('Product not found'));
  products.splice(index, 1);
  res.status(204).send();
};
