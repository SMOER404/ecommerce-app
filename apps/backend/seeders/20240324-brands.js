'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('brands', [
      {
        id: '1a2b3c4d-5e6f-4a5b-9c8d-1a2b3c4d5e6f',
        name: 'Nike',
        description: 'Американский спортивный бренд',
        image: '/placeholder.svg?height=200&width=200',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '2a3b4c5d-6e7f-4a5b-9c8d-2a3b4c5d6e7f',
        name: 'Adidas',
        description: 'Немецкий спортивный бренд',
        image: '/placeholder.svg?height=200&width=200',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '3a4b5c6d-7e8f-4a5b-9c8d-3a4b5c6d7e8f',
        name: 'Puma',
        description: 'Немецкий спортивный бренд',
        image: '/placeholder.svg?height=200&width=200',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '4a5b6c7d-8e9f-4a5b-9c8d-4a5b6c7d8e9f',
        name: 'New Balance',
        description: 'Американский спортивный бренд',
        image: '/placeholder.svg?height=200&width=200',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('brands', null, {});
  }
}; 