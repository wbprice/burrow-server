import React, { PropTypes, Component } from 'react'

import style from './../../../styles/environments/Controls.scss'
import Thermostat from './../ecosystems/Thermostat'

class Controls extends Component {

  render() {
    return (
      <section className={style.Controls}>
        <Thermostat />
      </section>
    )
  }

}

Controls.propTypes = {

}

export default Controls
