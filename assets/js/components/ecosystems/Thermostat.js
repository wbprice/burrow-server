import React, { PropTypes, Component } from 'react'

import style from './../../../styles/ecosystems/Thermostat.scss'

import ThermostatForm from './../organisms/ThermostatForm'

class Thermostat extends Component {

  render() {
    return (
      <section className={style.thermostatBody}>
        <ThermostatForm
          id={this.props.id}
          name={this.props.name}
          lastCheckin={this.props.lastCheckin}
          temperature={this.props.temperature} />
      </section>
    )
  }

}

Thermostat.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  lastCheckin: PropTypes.string,
  temperature: PropTypes.number
}

export default Thermostat
