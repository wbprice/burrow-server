import React, { PropTypes, Component } from 'react'

import style from './../../../styles/molecules/BigErrorMessage.scss'

class BigErrorMessage extends Component {
  render() {
    return (
      <section className={style.Container}>
        <h3 className={style.heading}>{this.props.heading}</h3>
        <p className={style.message}>{this.props.message}</p>
      </section>
    )
  }
}

BigErrorMessage.propTypes = {
  heading: PropTypes.string,
  message: PropTypes.string
}

export default BigErrorMessage
