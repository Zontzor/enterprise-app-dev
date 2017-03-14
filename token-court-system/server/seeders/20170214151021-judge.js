'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('judges', [{
      name: 'Alex Kiernan',
      room: 7,
      ext: '5678',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('judges', [{
      name: 'Alex Kiernan'
    }])
  }
};
