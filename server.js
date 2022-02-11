// Imports
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes/index');
const apiRoutes = require('./routes/apiRoutes/index');

// Defines port number and calls the server
const PORT = process.env.PORT || 3001;
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Starts the server
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
