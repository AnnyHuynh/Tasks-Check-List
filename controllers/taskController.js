const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Task = mongoose.model('Task');

 router.get("/task", (req, res) => {
   res.json('sample text')
 });

 module.exports = router;
