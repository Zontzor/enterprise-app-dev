'use strict';
module.exports = function(sequelize, DataTypes) {
  var CourtRoom = sequelize.define('CourtRoom', {
    number: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    },
    freezeTableName: true,
    tableName: 'court_rooms'
  });
  return CourtRoom;
};