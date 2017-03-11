'use strict';
module.exports = function(sequelize, DataTypes) {
  const Judge = sequelize.define('Judge', {
    name: DataTypes.STRING,
    room: DataTypes.INTEGER,
    ext: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    freezeTableName: true,
    tableName: 'judges'
  });
  return Judge;
};