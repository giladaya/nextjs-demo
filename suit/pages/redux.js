import React, { Component } from 'react'
import Header from '../components/Header'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import App from '../modules/app1'
import styles from 'styles/app1.sass'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../modules/app1/state/store'



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
