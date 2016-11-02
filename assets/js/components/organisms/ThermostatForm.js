import React, { PropTypes, Component } from 'react'
import moment from 'moment'

import style from './../../../styles/organisms/ThermostatForm.scss'

class ThermostatForm extends Component {

  getLastRemoteCheckin() {
    return moment().diff(this.props.lastCheckin, 'minutes')
  }

  render() {

    const minutesSinceLastCheckin = this.getLastRemoteCheckin.call(this)

    return (
      <form className={style.form} method="post" action={`/thermostat/${this.props.id}`}>

        <fieldset className={style.temperature}>
          <legend>Target Temperature</legend>
          <input type="hidden" name="_method" value="put" />
          <input name="temperature" type="number" required value={this.props.temperature} max="99" min="68" />
          <span className={style.degree}>&deg;</span>
        </fieldset>

        <input className={style.name} type="text" name="name" value={this.props.name} required />

        <button className="pure-button pure-button-primary">Update</button>

        {
          minutesSinceLastCheckin > 15 &&
          <div className={style.warning}>
            <span>{"The remote hasn\'t checked in recently."}</span>
          </div>
        }

      </form>
    )

  }

}

ThermostatForm.propTypes = {
  id: PropTypes.number,
  temperature: PropTypes.string,
  name: PropTypes.string,
  lastCheckin: PropTypes.string
}

export default ThermostatForm
