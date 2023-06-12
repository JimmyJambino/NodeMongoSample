import express from "express";

import User from "../models/user.js";
var router = express.Router();

async function createUser(userDetails) {
  var task = new Task({
    taskName: taskName,
    createDate: createDate
  });

  var user = new User({
    userName: userDetails.userName,
    createDate: userDetails.createDate
  });

  user.save()
      .then(() => { 
        console.log(`Added new task ${taskName} - createDate ${createDate}`)        
        res.redirect('/'); })
      .catch((err) => {
          console.log(err);
          res.send('Sorry! Something went wrong.');
      });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
