'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('court_rooms', [{
      number: '5A',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('court_rooms', [{
      number :'5A'
    }])
  }
};
