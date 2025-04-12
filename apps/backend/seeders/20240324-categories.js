'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        id: 'b8edd09c-63c7-4c38-be14-696e0d3fee9a',
        name: 'Обувь',
        description: 'Спортивная и повседневная обувь',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'c9fee0ad-74d8-4c4a-9f25-7a8b9c0d1e2f',
        name: 'Одежда',
        description: 'Спортивная и повседневная одежда',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'd0fee1be-85e9-4d5b-b036-8a9b0c1d2e3f',
        name: 'Аксессуары',
        description: 'Спортивные аксессуары и сумки',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e1fee2cf-96fa-4e6c-c147-9a0b1c2d3e4f',
        name: 'Экипировка',
        description: 'Спортивная экипировка и защита',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
}; 