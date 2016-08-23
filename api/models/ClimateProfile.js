'use strict'

const Model = require('trails-model')

/**
 * @module Climateprofile
 * @description Model containing information about climate profiles.
 */
module.exports = class ClimateProfile extends Model {

  static config () {
  }

  static schema (app, Sequelize) {
    return {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      temperature: {
        type: Sequelize.INTEGER,
        defaultValue: 72
      }
    }
  }
}
