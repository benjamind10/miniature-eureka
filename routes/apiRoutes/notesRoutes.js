const router = require('express').Router();

router.get('/notes', (req, res) => {
  console.log('Getting notes');

  console.log(req);
});

router.post('/notes', (req, res) => {
  console.log('Posting notes');
});

router.delete('/notes/:id', (req, res) => {
  console.log('Delete notes');
});

module.exports = router;
