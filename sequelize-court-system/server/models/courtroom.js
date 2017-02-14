'use strict';
module.exports = function(sequelize, DataTypes) {
  var CourtRoom = sequelize.define('CourtRoom', {
    number: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return CourtRoom;
};