'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    hashed_password: DataTypes.STRING,
    access_key : DataTypes.STRING,
    secret_key : DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    freezeTableName: true,
    tableName: 'users'
  });
  return User;
};
