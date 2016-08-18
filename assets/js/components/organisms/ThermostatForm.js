import React, { PropTypes, Component } from 'react'

import style from './../../../styles/organisms/ThermostatForm.scss'

class ThermostatForm extends Component {

  render() {
    return (
      <form className={style.Form} method="POST">

        <fieldset className={style.Temperature}>
          <legend>Target Temperature</legend>
          <input type="number" value="77" max="99" />
          <span className={style.degree}>&deg;</span>
        </fieldset>

        <fieldset>
          <legend>Climate Profile</legend>
          <select>
            <option>At Home</option>
            <option>At Work</option>
            <option>Sleeping</option>
          </select>
        </fieldset>

        <button>
        </button>

      </form>
    )

  }

}

ThermostatForm.propTypes = {}

export default ThermostatForm
