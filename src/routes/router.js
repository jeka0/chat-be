const router = require('express').Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const checkAuth = require('../middlewares/checkAuth.js');

router.use('/auth', authRoutes);
router.use('/user', checkAuth, userRoutes);
module.exports = router;