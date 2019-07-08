'use strict';

const router = require('express').Router();
const { Candy } = require('../db');

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))
router.get('./candies', async function(req, res, next) {
  try {
    const candies = await Candy.findAll();
    res.send(candies);
  } catch (error) {
    next(error);
  }
});

router.get('./:id', async function(req, res, next) {
  try {
    const singleCandy = await Candy.findById(req.params.id);
    res.send(singleCandy);
  } catch (error) {
    next(error);
  }
});

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
router.get('/', (req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
