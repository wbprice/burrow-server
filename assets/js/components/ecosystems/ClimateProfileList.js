import React, { PropTypes, Component } from 'react'

import ClimateProfile from './../organisms/ClimateProfile'

import style from './../../../styles/ecosystems/ClimateProfileList.scss'

class ClimateProfileList extends Component {

  render() {
    return (
      <section className={`${style.climateProfileList} pure-menu`}>
        <span className="pure-menu-heading">Climate Profiles</span>
        <ul className="pure-menu-list">
          {this.props.climateProfiles.map((climateProfile, index) => {
            return (
              <ClimateProfile
                selected={this.props.temperature === climateProfile.temperature}
                key={index}
                id={climateProfile.id}
                name={climateProfile.name}
                temperature={climateProfile.temperature} />
            )
          })}
        </ul>
      </section>
    )
  }

}

ClimateProfileList.propTypes = {
  temperature: PropTypes.number,
  climateProfiles: PropTypes.array
}

export default ClimateProfileList
