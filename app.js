const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// require('./models/db');
const Task = require('./models/task.model');
const mongoose = require("mongoose");
const taskRoutes = express.Router();
// const routes = require("./routes");
// const taskController = require('./controllers/taskController');
const PORT = process.env.PORT || 3002;

app.use(cors());

// app.use('/task', taskController);
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/TaskDB', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


taskRoutes.route('/').get(function(req, res) {
  Task.find({})
    .then((results) => {
        // console.log('here', results)
        res.send(results);
    })
});

taskRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Task.findById(id, function(err, task) {
      res.json(task);
  });
});

taskRoutes.route('/update/:id').post(function(req, res) {
  Task.findById(req.params.id, function(err, task) {
      if (!task)
          res.status(404).send("data is not found");
      else
          task.Done = req.body.Done;
          task.DueDate = req.body.DueDate;
          task.TaskName = req.body.TaskName;
          task.PerformBy = req.body.PerformBy;
          task.Odom = req.body.Odom;
          task.CCAK = req.body.CCAK;
          task.CCBHI = req.body.CCBHI;
          task.SGWS = req.body.SGWS;
          task.NWB = req.body.NWB;
          task.Quarterly = req.body.Quarterly;
          task.Note = req.body.Note;
          task.save().then(task => {
              res.json('Task updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});

taskRoutes.route('/add').post(function(req, res) {
    console.log(req.body);
  let task = new Task(req.body);
  task.save()
      .then(task => {
          console.log("task is successly save");
          res.status(200).json({'task': 'task added successfully'});
      })
      .catch(err => {
          console.log("something goes wrong!");
          res.status(400).send('adding new task failed');
      });
});

app.use('/Tasks', taskRoutes);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> Epress Server now listening on PORT ${PORT}!`)
);
