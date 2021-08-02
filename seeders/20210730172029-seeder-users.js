'use strict';
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let users = JSON.parse(fs.readFileSync('./seeders/users.json', 'utf8'));
    let usersFix = users.map(user => {
      const { username, password, avatar, wallet, deletedFlag, createdAt, updatedAt } = user
      return {
        username,
        password,
        avatar,
        wallet,
        deletedFlag,
        createdAt,
        updatedAt,
      }
    })
    await queryInterface.bulkInsert('Users', usersFix, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
