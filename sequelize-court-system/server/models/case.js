'use strict';
module.exports = function(sequelize, DataTypes) {
  var Case = sequelize.define('Case', {
    start_date: DataTypes.DATE,
    duration: DataTypes.STRING,
    result: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Case.hasOne(models.Judge, {foreignKey: 'judge_id'}),
        Case.hasOne(models.Courtroom, {foreignKey: 'courtroom_id'}),
        Case.hasOne(models.Participant, {foreignKey: 'claimant_id'}),
        Case.hasOne(models.Participant, {foreignKey: 'respondent_id'});
      }
    }
  });
  return Case;
};