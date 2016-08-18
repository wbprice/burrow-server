import React, { PropTypes, Component } from 'react'

class Layout extends Component {
  render() {
    return (
      <html>
        <head>
          <title>Remount Example</title>
        </head>
        <body>
          <div id="app-mount"
              dangerouslySetInnerHTML={{ __html: this.props.children }}>
          </div>
          <script id="app-state"
              dangerouslySetInnerHTML={{ __html: this.props.state }}>
          </script>
          <script src="/assets/client.js"></script>
        </body>
      </html>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.any,
  state: PropTypes.object
}

export default Layout
