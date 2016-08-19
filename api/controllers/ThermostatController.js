'use strict'

const Controller = require('trails-controller')

/**
 * @module ThermostatController
 * @description Generated Trails.js Controller.
 */
module.exports = class ThermostatController extends Controller {

  createOrUpdate (request, reply) {

    const id = request.params.id
    const temperature = request.payload.temperature
    const name = request.payload.name

    if (request.payload._method === 'put') {
      this.app.orm.Thermostat.update(
        {temperature: temperature},
        {where: {id: id}}
      ).then(() => {
        reply().redirect('/controls')
      })
    }

    else {
      this.app.orm.Thermostat.create(
        {name, temperature}
      ).then(record => {
        reply(record)
      })
    }

  }

}
