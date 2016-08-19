'use strict'

const Controller = require('trails-controller')

/**
 * @module ThermostatController
 * @description Generated Trails.js Controller.
 */
module.exports = class ThermostatController extends Controller {

  update (request, reply) {

    const id = request.params.id
    const temperature = request.payload.temperature

    this.app.orm.Thermostat.update(
      {temperature: temperature},
      {where: {id: id}}
    ).then(() => {
      reply().redirect('/controls')
    })

  }

}
