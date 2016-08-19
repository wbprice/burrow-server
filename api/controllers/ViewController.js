'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  index (request, reply) {
    reply.view('Index')
  }

  controls (request, reply) {

    this.app.orm.Thermostat.findAll()
    .then(thermostats => {
      reply.view('Controls', {thermostats})
    })

  }

}
