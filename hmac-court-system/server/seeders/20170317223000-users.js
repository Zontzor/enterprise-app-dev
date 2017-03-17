'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      username: 'test',
      hashed_password: '$2a$08$96qm3A5J35T295pj8KOfOuLNVmHpTR.EMyWzvqIFGEc6ek0LW4Pki', // test9876
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
