import React from 'react'

import ErrorLayout from 'layouts/error'

import image from 'assets/error-50x.svg'

function Error() {
  return <ErrorLayout error="50x" image={image} />
}

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: null }
  }

  componentDidCatch(error) {
    this.setState({ hasError: error })
    // for now, Sentry is not activate…
  }

  render() {
    if (this.state.hasError) {
      return <Error />
    }

    return this.props.children
  }
}
