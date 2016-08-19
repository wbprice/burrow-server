import React, { PropTypes, Component } from 'react'

import style from './../../../styles/ecosystems/NewThermostatForm.scss'

class NewThermostatForm extends Component {

  render() {
    return (
      <form className={`${style.Form} pure-form pure-form-aligned`} method="post" action="/api/v1/thermostat">
        <fieldset>
          <legend>Create New Thermostat</legend>
          <input type="hidden" name="_method" value="post" />

          <div className="pure-control-group">
            <label>Temperature (&deg;F)</label>
            <input name="temperature" type="number" placeholder="Temperature" value="72" max="99" min="68" required />
          </div>

          <div className="pure-control-group">
            <label>Thermostat Name</label>
            <input type="text" name="name" placeholder="Thermostat Name" required/>
          </div>

          <div className="pure-controls">
            <button className="pure-button pure-button-primary">Submit</button>
          </div>

        </fieldset>
      </form>
    )
  }

}

NewThermostatForm.propTypes = {}

export default NewThermostatForm
