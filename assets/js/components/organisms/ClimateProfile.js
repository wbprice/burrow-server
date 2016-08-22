import React, { PropTypes, Component } from 'react'

import style from './../../../styles/organisms/ClimateProfile.scss'

class ClimateProfile extends Component {

  render() {
    return (
      <li className={`pure-menu-item ${style.climateProfile} ${this.props.selected ? style.selected : ''}`}>
        <a href={`/climateprofile/select/${this.props.id}`}
          className="pure-menu-link">
          <label>{this.props.name}</label>{' '}
          <label>{this.props.temperature}&deg;</label>
        </a>
      </li>
    )
  }

}

ClimateProfile.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  temperature: PropTypes.number
}

export default ClimateProfile
