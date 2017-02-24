'use strict';
module.exports = function(sequelize, DataTypes) {
  var Case = sequelize.define('Case', {
    start_date: DataTypes.DATE,
    duration: DataTypes.STRING,
    result: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {        
        Case.hasOne(models.Judge, {foreignKey: 'id', targetKey: 'id'}),
        Case.hasOne(models.CourtRoom, {foreignKey: 'id', targetKey: 'id'}),
        Case.hasOne(models.Participant, {foreignKey: 'id', targetKey: 'id'}),
        Case.hasOne(models.Participant, {foreignKey: 'id', targetKey: 'id'});
      }
    }
  });
  return Case;
};