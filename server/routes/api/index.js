const router = require('express').Router();
const authRoutes = require('./auth');
const loginRoutes = require('./login'); 
router.use('/auth', authRoutes);
router.use('/login', loginRoutes);

module.exports = router;
