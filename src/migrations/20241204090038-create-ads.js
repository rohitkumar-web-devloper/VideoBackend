'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      catergory: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      mobileNumber: {
        type: Sequelize.STRING
      },
      whatsAppNumber: {
        type: Sequelize.STRING
      },
      ethnicity: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      breast: {
        type: Sequelize.STRING
      },
      hair: {
        type: Sequelize.STRING
      },
      bodyType: {
        type: Sequelize.STRING
      },
      pricePerHour: {
        type: Sequelize.STRING
      },
      services: {
        type: Sequelize.JSON
      },
      attentionTo: {
        type: Sequelize.JSON
      },
      profile: {
        type: Sequelize.JSON
      },
      placeOfService: {
        type: Sequelize.JSON
      },
      paymentMethod: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ads');
  }
};