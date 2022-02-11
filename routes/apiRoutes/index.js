// Imports
const router = require('express').Router();
const apiRoutes = require('../apiRoutes/apiRoutes');

// Tells the router to use the API routes
router.use(apiRoutes);

module.exports = router;
