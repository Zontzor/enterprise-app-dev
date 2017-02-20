'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('cases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.STRING
      },
      result: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      judge_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'judges',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      courtroom_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'court_rooms',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      claimant_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'participants',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      respondent_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'participants',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('cases');
  }
};