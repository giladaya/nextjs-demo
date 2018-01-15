import React, { Component } from 'react'
import Header from '../common-components/Header'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import App from '../modules/redux_app'
import styles from 'styles/app1.scss'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../modules/redux_app/state/store'

class Redux extends Component {

  static async getInitialProps () {
    console.log('getInitialProps for Redux page')
    // add delay
    await new Promise((resolve) => {
      setTimeout(resolve, 300)
    })
    return { }
  }

  render () {
    return (
      <div className="wrapper">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <Header />
        <App/>
      </div>
    )
  }
}

export default withRedux(initStore)(Redux)
