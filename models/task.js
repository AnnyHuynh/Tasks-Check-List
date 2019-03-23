
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = function(sequelize, DataTypes) {
  var TaskList = sequelize.define("closing calendar", {

    DueDate: {
      type: Sequelize.STRING
    } ,
    TaskName: {
      type: Sequelize.STRING
    } ,
    PerformedBy: {
      type: Sequelize.STRING
    } ,
    ODOM: {
      type: Sequelize.STRING
    } ,
    CCBAK: {
      type: Sequelize.STRING
    } ,
    CCBHI: {
      type: Sequelize.STRING
    } ,
    SGWS: {
      type: Sequelize.STRING
    },
    NWB: {
      type: Sequelize.STRING
    } ,
    Quarterly: {
      type: Sequelize.STRING
    } ,
    Note: {
      type: Sequelize.STRING
    }

  });
  return TaskList;
};


