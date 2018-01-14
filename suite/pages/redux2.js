import React, { Component } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import App from '../modules/redux_app2'
import styles from 'styles/app1.scss'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../Store'
import * as Actions from '../modules/redux_app2/state/actions'

class ReduxPage extends Component {

  static async getInitialProps ({store, isServer}) {
    console.log('getInitialProps for Redux2Page page')
    // add delay
    await new Promise((resolve) => {
      setTimeout(resolve, 300)
    })
    store.dispatch(Actions.setCount(5));
    return { }
  }

  render () {
    return (
      <Layout header={<Header />}>
        <div className="wrapper">
          <style dangerouslySetInnerHTML={{ __html: styles }} />
          <App/>
        </div>
      </Layout>
    )
  }
}

export default withRedux(initStore)(ReduxPage)
