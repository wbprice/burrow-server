'use strict'
/* global describe, it */

const assert = require('assert')

describe('Thermostat Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Thermostat'])
  })
})
