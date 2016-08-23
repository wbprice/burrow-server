/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.index'
  },

  {
    method: 'GET',
    path: '/controls',
    handler: 'ViewController.controls'
  },

  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },

  {
    method: 'POST',
    path: '/thermostat/{id?}',
    handler: 'ThermostatController.createOrUpdate'
  },

  {
    method: 'GET',
    path: '/climateprofile/select/{id}',
    handler: 'ClimateProfileController.select'
  }

]
