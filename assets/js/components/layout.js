import React, { PropTypes, Component } from 'react'

import globalStyles from './../../styles/globals.scss'

class Layout extends Component {
  render() {
    return (
      <html>
        <head>
          <title>Burrow</title>
          <link rel="stylesheet" href="/dist/styles/production.css" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <section className={globalStyles.container}>
            <div id="app-mount"
                dangerouslySetInnerHTML={{ __html: this.props.children }}>
            </div>
            <script id="app-state"
                dangerouslySetInnerHTML={{ __html: this.props.state }}>
            </script>
          </section>
          <script src="/dist/client.js"></script>
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
