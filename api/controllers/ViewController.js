'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  index (request, reply) {
    reply.view('Index')
  }

  controls (request, reply) {
    reply.view('Controls')
  }

}
