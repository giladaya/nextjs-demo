import React, { Component } from 'react'
import Header from '../components/Header'
import App from '../modules/app2'
import styles from 'styles/app2.sass'
import fetch from 'isomorphic-unfetch'

export default class About extends Component {
  static defaultProps = {
    stars: 2222,
  }

  static async getInitialProps () {
    console.log('getInitialProps for About page')
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/developit/preact')
    const json = await res.json()

    console.log('waiting...');
    // add delay
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })
    return { stars: json.stargazers_count }
  }

  render () {
    return (
      <div className="wrapper">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <Header />
        <App stars={this.props.stars}/>
      </div>
    )
  }
}
