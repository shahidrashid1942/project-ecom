const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");


const { addProducts } = require('../controllers/productController');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.post("/add", authMiddleware, addProducts);

module.exports = router;
