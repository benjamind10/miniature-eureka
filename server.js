const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes/index');
const notesRoutes = require('./routes/apiRoutes/index');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use Routes
app.use('/api', notesRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
