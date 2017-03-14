'use strict';
module.exports = function(sequelize, DataTypes) {
  var Case = sequelize.define('Case', {
    judge_id: DataTypes.INTEGER,
    courtroom_id: DataTypes.INTEGER,
    claimant_id: DataTypes.INTEGER,
    respondent_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    duration: DataTypes.STRING,
    result: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {        
        Case.hasOne(models.Judge, {foreignKey: 'id', targetKey: 'judge_id'}),
        Case.hasOne(models.CourtRoom, {foreignKey: 'id', targetKey: 'courtroom_id'}),
        Case.hasOne(models.Participant, {foreignKey: 'id', targetKey: 'claimant_id'}),
        Case.hasOne(models.Participant, {foreignKey: 'id', targetKey: 'respondent_id'});
      },
    },
    freezeTableName: true,
    tableName: 'cases'
  });
  return Case;
};