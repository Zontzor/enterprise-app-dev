'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Judges', [{
      name: 'Alex Kiernan',
      room: 7,
      ext: '5678',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Judges', [{
      name: 'Alex Kiernan'
    }])
  }
};
