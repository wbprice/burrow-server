import React, { PropTypes, Component } from 'react'

import style from './../../../styles/environments/Controls.scss'
import Thermostat from './../ecosystems/Thermostat'
import NewThermostatForm from './../ecosystems/NewThermostatForm'

class Controls extends Component {

  render() {
    return (
      <section className={style.Controls}>
        {this.props.thermostats.map((thermostat, index) => {
          return (
            <Thermostat
              key={index}
              name={thermostat.name}
              temperature={thermostat.temperature}
              id={thermostat.id} />
          )
        })}
        <NewThermostatForm />
      </section>
    )
  }

}

Controls.propTypes = {
  thermostats: PropTypes.array
}

export default Controls
