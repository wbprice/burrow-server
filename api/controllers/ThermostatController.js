'use strict'

const Controller = require('trails-controller')
const Boom = require('boom')

/**
 * @module ThermostatController
 * @description Generated Trails.js Controller.
 */

module.exports = class ThermostatController extends Controller {



  createOrUpdate (request, reply) {

    const id = request.params.id
    const temperature = request.payload.temperature
    const name = request.payload.name

    if (request.payload['_method'] === 'put') {
      this.app.orm.Thermostat.update(
        {temperature},
        {where: {id}}
      ).then(() => {
        reply().redirect('/controls')
      })
    }

    else if (request.payload['_method'] === 'post') {
      this.app.orm.Thermostat.create(
        {name, temperature}
      ).then(record => {
        reply().redirect('/controls')
      })
    }

    else {
      reply(Boom.badRequest('There was a bad request, that\'s all we know.'))
    }

  }

}
