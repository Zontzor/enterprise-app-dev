'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('participants', 
    [{
      name: 'Donald Trump',
      address: '725 5th Ave, New York',
      type: 'claimant',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Joe Blow',
      address: 'Kevin Street',
      type: 'respondent',
      createdAt : new Date(),
      updatedAt : new Date()
    }],
     {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('participants', 
    [{
      name :'Donald Trump'
    },
    {
      name :'Joe Blow'
    }])
  }
};
