import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.scss'

async function fetchData() {
  const res = await fetch('https://api.github.com/repos/facebook/react')
  const json = await res.json()
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  return {
    onmountStars: json.stargazers_count
  }
}

export default class App extends Component {
  static defaultProps = {
    stars: 2222,
  }

  static propTypes = {
    prefetchStars: PropTypes.number,
  }

  constructor (props) {
    super(props)
    this.state = {
      onmountStars: 0
    }
  }

  componentDidMount () {
    fetchData().then(data => {
      this.setState({
        onmountStars: data.onmountStars
      })
    })
  }

  render () {
    return (
      <div className="foobar">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <p>This app combines server side data fetching and client side data fetching</p>
        <p>Preact has {this.props.prefetchStars} ⭐️</p>
        <p>React has {this.state.onmountStars === 0 ? '...' : this.state.onmountStars } ⭐️</p>
      </div>
    )
  }
}
