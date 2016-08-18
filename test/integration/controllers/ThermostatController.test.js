'use strict'
/* global describe, it */

const assert = require('assert')

describe('ThermostatController', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['ThermostatController'])
  })
})
