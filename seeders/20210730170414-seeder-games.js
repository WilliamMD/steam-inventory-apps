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
    let games = JSON.parse(fs.readFileSync('./seeders/games.json', 'utf8'));
    let gamesFix = games.map(game => {
      const { name, description, genre, price, image, createdAt, updatedAt } = game
      return {
        name,
        description,
        genre,
        price,
        image,
        createdAt,
        updatedAt,
      }
    })
    await queryInterface.bulkInsert('Games', gamesFix, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Games', null, {})
  }
};
