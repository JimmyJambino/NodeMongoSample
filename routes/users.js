import express from "express";

import User from "../models/user.js";
var router = express.Router();

async function createUser(userDetails) {
  const createDate = Date.now();
  var user = new User({
    userName: userDetails.userName,
    createDate
  });

  user.save();
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async function(req, res, next) {
  console.log(req.body);
  createUser(req.body);
  res.send("Created user.");
});

export default router;
