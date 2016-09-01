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
        {name, temperature},
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

  findOne (request, reply) {

    const id = request.params.id
    const originIsRemote = request.query['is-remote']

    return new Promise((resolve, reject) => {

      // If the origin of the request is a remote, log the time so we can do
      // some basic remote health checking.
      if (originIsRemote) {
        this.app.orm.Thermostat.update(
          { lastCheckin: new Date() },
          { where: {id}}
        ).then(() => { resolve() })
      }

      else {
        resolve()
      }

    })
    .then(() => {
      return this.app.orm.Thermostat.find({where: {id}})
    })
    .then(thermostat => {
      reply(thermostat)
    })
    .catch(error => {
      reply(Boom.badRequest('There was an error.  That\s all we know'))
    })

  }

}
