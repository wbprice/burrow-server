import React, { PropTypes, Component } from 'react'

class Index extends Component {

  render() {
    return (
      <section>
        <h1>Server side rendering yo!</h1>
        <p>Burrow is a tool for controlling the temperature in my house!</p>
      </section>
    )
  }

}

Index.propTypes = {
  children: PropTypes.any
}

export default Index
