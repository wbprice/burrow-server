import React, { PropTypes, Component } from 'react'

import style from './../../../styles/ecosystems/Thermostat.scss'

import ThermostatForm from './../organisms/ThermostatForm'

class Thermostat extends Component {

  render() {
    return (
      <section className={style.thermostatBody}>
        <ThermostatForm />
      </section>
    )
  }

}

Thermostat.propTypes = {}

export default Thermostat
