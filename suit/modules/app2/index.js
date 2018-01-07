import React, { Component } from 'react'

export default class App extends Component {
  static defaultProps = {
    stars: 2222,
  }

  render () {
    return (
      <div>
        <p>This is about Next!</p>
        <p>Preact has {this.props.stars} ⭐️</p>
      </div>
    )
  }
}
