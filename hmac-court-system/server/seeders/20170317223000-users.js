'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      username: 'test',
      hashed_password: '72ef88cc2408c8ffc951cc1333c95d4c',
      access_key: 'bXlzdXBlcnNlY3JldGtleQ==', // mysupersecretkey
      secret_key: 'TW9ua2V5', // Monkey
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cases', [{
      username: 'test'
    }])
  }
};
