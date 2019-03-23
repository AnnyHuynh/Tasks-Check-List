var express = require('express');
var router = express.Router();
var db = require("../models");
/* GET home page. */

router.get('/api/task', function(req, res, next) {
  db.TaskList.findAll({}).then(function(respond){
    res.json(respond);
  })
});



module.exports = router;
