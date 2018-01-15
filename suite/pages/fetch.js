import React, { Component } from 'react'
import Layout from '../common-components/Layout'
import Header from '../common-components/Header'
import App from '../modules/fetch_app'
import styles from 'styles/app2.scss'
import fetch from 'isomorphic-unfetch'

export default class About extends Component {
  static async getInitialProps () {
    console.log('getInitialProps for About page')
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/developit/preact')
    const json = await res.json()

    console.log('waiting...');
    // add delay
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    return { stars: json.stargazers_count }
  }

  render () {
    return (
      <Layout header={<Header />}>
        <div className="wrapper">
          <style dangerouslySetInnerHTML={{ __html: styles }} />
          <App prefetchStars={this.props.stars}/>
        </div>
      </Layout>
    )
  }
}
