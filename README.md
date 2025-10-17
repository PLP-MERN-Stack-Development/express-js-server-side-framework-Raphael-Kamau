# 🚀 Express.js RESTful API – Products Resource

This project is a RESTful API built with Express.js for managing a collection of products. It demonstrates proper routing, middleware usage, error handling, and advanced features like filtering, pagination, and search.

## 📦 Features

- CRUD operations for products
- Custom middleware: logger, authentication, validation
- Global error handling with custom error classes
- Filtering by category
- Pagination support
- Search by product name
- Product statistics by category

## 🛠️ Tech Stack

- Node.js (v18+)
- Express.js
- UUID for unique product IDs
- Body-parser (optional if using Express 4.16+)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies
bash
npm install
3. Create a .env file
Copy .env.example and fill in your values:

bash
cp .env.example .env
4. Start the server
bash
npm start
Server will run on http://localhost:3000

🔐 Authentication
All POST, PUT, and DELETE routes require an API key in the request header:

Code
x-api-key: your_api_key_here
📮 API Endpoints
Method	Endpoint	Description
GET	/api/products	List all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product
GET	/api/products/search	Search products by name
GET	/api/products/stats	Get product stats by category
🔎 Query Parameters
category: Filter by category

page: Page number (default: 1)

limit: Items per page (default: 10)

Example:

Code
GET /api/products?category=books&page=2&limit=5
🧪 Testing
Use Postman, Insomnia, or curl to test endpoints.

📁 Project Structure
Code
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── server.js
├── .env.example
├── README.md
📜 License
MIT

Code

---


```
