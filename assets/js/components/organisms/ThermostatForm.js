import React, { PropTypes, Component } from 'react'

import style from './../../../styles/organisms/ThermostatForm.scss'

class ThermostatForm extends Component {

  render() {
    return (
      <form className={style.form} method="POST" action="/api/v1/thermostat/">

        <fieldset className={style.temperature}>
          <legend>Target Temperature</legend>
          <input type="number" value={this.props.temperature} max="99" min="68" />
          <span className={style.degree}>&deg;</span>
        </fieldset>

        <h2>{this.props.name}</h2>

        <button className="pure-button pure-button-primary">Update</button>

      </form>
    )

  }

}

ThermostatForm.propTypes = {
  id: PropTypes.number,
  temperature: PropTypes.string,
  name: PropTypes.string
}

export default ThermostatForm
