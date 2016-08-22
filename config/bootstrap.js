// config/bootstrap.js

const fixtures = require('./fixtures')

module.exports = function(app) {

  app.orm.Thermostat.findAll({})
  .then(thermostats => {
    if (thermostats.length === 0) {
      Promise.all(fixtures.thermostats.map(thermostat => {
        return app.orm.Thermostat.create(thermostat)
      }))
      .then(() => {
        app.log.info('Created a default thermostat')
      })
    }
  })

  app.orm.ClimateProfile.findAll({})
  .then(climateProfiles => {
    if (climateProfiles.length === 0) {
      Promise.all(fixtures.climateProfiles.map(climateProfile => {
        return app.orm.ClimateProfile.create(climateProfile)
      }))
      .then(() => {
        app.log.info('Created default climate profiles')
      })
    }
  })

}
