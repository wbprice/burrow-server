'use strict'

const Controller = require('trails-controller')

/**
 * @module ClimateprofileController
 * @description Generated Trails.js Controller.
 */
module.exports = class ClimateProfileController extends Controller{

  select (request, reply) {

    const id = request.params.id

    this.app.orm.ClimateProfile.find({where: {id}})
    .then(climateProfile => {

      return this.app.orm.Thermostat.findAll()
      .then(thermostats => {
        return thermostats[0].id
      })
      .then(id => {
        return this.app.orm.Thermostat.update(
          {temperature: climateProfile.temperature},
          {where: {id}}
        )
      })

    })
    .then(() => {
      reply().redirect('/controls')
    })

  }

}
