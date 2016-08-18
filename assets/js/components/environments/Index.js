import React, { PropTypes, Component } from 'react'

class Index extends Component {

  render() {
    return (
      <h1>Server side rendering yo!</h1>
    )
  }

}

Index.propTypes = {
  children: PropTypes.any
}

export default Index
