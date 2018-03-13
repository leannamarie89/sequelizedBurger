var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

module.exports = function(sequelize) {

  var Burger = sequelize.define('Burger', {
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Burger;

};