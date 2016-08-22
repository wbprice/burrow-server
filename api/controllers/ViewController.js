'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  index (request, reply) {
    reply.view('Index')
  }

  controls (request, reply) {

    Promise.all([
      this.app.orm.Thermostat.findAll(),
      this.app.orm.ClimateProfile.findAll()
    ])
    .then(results => {
      const thermostats = results[0]
      const climateProfiles = results[1]
      reply.view('Controls', {thermostats, climateProfiles})
    })

  }

}
