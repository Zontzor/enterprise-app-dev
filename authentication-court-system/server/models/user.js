'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    hashed_password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      },
    },
    freezeTableName: true,
    tableName: 'users'
  });
  return User;
};