const express = require('express');
const router = express.Router();
const userRoutes = require('./user.routes')

router.get("/", (req, res) => res.render("home"));



router.use([userRoutes]);

module.exports = router;