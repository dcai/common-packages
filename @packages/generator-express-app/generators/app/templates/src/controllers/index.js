const express = require('express');

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send(`<html><body><h1>welcome to <%= appname %></h1></body></html>`);
});

router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
  });
});

module.exports = router;
