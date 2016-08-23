import React, { PropTypes, Component } from 'react'

import style from './../../../styles/environments/Controls.scss'
import Thermostat from './../ecosystems/Thermostat'
import ClimateProfileList from './../ecosystems/ClimateProfileList'
import BigErrorMessage from './../molecules/BigErrorMessage'

class Controls extends Component {

  render() {
    return (
      <section className={style.Controls}>

        {this.props.thermostats.length === 0 &&
          <BigErrorMessage
            heading="No Thermostats Found"
            message="You should register one!" />
        }

        {this.props.thermostats.map((thermostat, index) => {
          return (
            <section>
              <Thermostat
                key={index}
                name={thermostat.name}
                temperature={thermostat.temperature}
                id={thermostat.id} />
              <ClimateProfileList
                temperature={thermostat.temperature}
                climateProfiles={this.props.climateProfiles} />
            </section>
          )
        })}

      </section>
    )
  }

}

Controls.propTypes = {
  thermostats: PropTypes.array,
  climateProfiles: PropTypes.array
}

export default Controls
