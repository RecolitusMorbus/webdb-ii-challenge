const express = require('express');
const Router = require('../routes/router.js');

const server = express();

server.use(express.json());
server.use('/router', Router);

server.get('/', (req, res) => {
  res.send(`Check, check, sanity check, check.`);
});

module.exports = server;