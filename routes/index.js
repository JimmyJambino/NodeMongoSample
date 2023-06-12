import express from "express";
import Task from "../models/task.js";

var router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    const tasks = await Task.find();
    const currentTasks = tasks.filter(task => !task.completed);
    res.send(currentTasks);
  } catch(err) {
    res.send("Something went wrong.");
  }
});


router.post('/addTask', async function(req, res, next) {
  const taskName = req.body.taskName;
  const createDate = Date.now();
  
  var task = new Task({
    taskName: taskName,
    createDate: createDate
  });
  console.log(`Adding a new task ${taskName} - createDate ${createDate}`)
  await task.save();
  res.redirect("/");
  // task.save()
  //     .then(() => { 
  //       console.log(`Added new task ${taskName} - createDate ${createDate}`)        
  //       res.redirect('/'); })
  //     .catch((err) => {
  //         console.log(err);
  //         res.send('Sorry! Something went wrong.');
  //     });
});

router.post('/completeTask', function(req, res, next) {
  console.log("I am in the PUT method")
  const taskId = req.body._id;
  const completedDate = Date.now();

  Task.findByIdAndUpdate(taskId, { completed: true, completedDate: Date.now()})
    .then(() => { 
      console.log(`Completed task ${taskId}`)
      res.redirect('/'); }  )
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


router.post('/deleteTask', function(req, res, next) {
  const taskId = req.body._id;
  const completedDate = Date.now();
  Task.findByIdAndDelete(taskId)
    .then(() => { 
      console.log(`Deleted task $(taskId)`)      
      res.redirect('/'); }  )
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


// module.exports = router;
export default router;
