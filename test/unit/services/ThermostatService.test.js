'use strict'
/* global describe, it */

const assert = require('assert')

describe('ThermostatService', () => {
  it('should exist', () => {
    assert(global.app.api.services['ThermostatService'])
  })
})
