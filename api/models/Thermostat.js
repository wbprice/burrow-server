'use strict'

const Model = require('trails-model')

/**
 * @module Thermostat
 * @description Contains information about a thermostat.
 */
module.exports = class Thermostat extends Model {

  static config () {
    return {}
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
      },
      lastCheckin: {
        type: Sequelize.DATE
      }
    }
  }

}
