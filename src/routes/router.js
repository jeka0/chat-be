const router = require('express').Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const messageRoutes = require('./messageRoutes');
const { checkAuth } = require('../middlewares/checkAuth.js');

router.use('/auth', authRoutes);
router.use('/user', checkAuth, userRoutes);
router.use('/message', checkAuth, messageRoutes);
module.exports = router;