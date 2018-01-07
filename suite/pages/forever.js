import React, { Component } from 'react'
import Header from '../components/Header'

export default class Forever extends Component {
  // Add some delay
  static async getInitialProps () {
    console.log('getInitialProps for Forever page')
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })
    return {}
  }

  render () {
    return (
      <div>
        <Header />
        <p>This page was rendered for a while!</p>
      </div>
    )
  }
}
