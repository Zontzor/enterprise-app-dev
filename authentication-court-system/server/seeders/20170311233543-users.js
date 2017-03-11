'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', 
    [{
      username: 'test',
      hashed_password: 'test9876',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      username: 'Joe',
      hashed_password: 'test456',
      createdAt : new Date(),
      updatedAt : new Date()
    }],
     {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', 
    [{
      username :'test'
    },
    {
      username :'Joe'
    }])
  }
};
