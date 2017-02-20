'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cases', [{
      start_date: new Date(),
      duration: "5 Days",
      result: false,
      createdAt : new Date(),
      updatedAt : new Date(),
      judge_id: 1,
      courtroom_id: 1,
      claimant_id: 1,
      respondent_id: 2
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cases', [{
      judge_id: 1,
      courtroom_id: 1,
      claimant_id: 1,
      respondent_id: 2
    }])
  }
};
