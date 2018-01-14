import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Router from 'next/router'
import NProgress from 'nprogress'
import NProgressCss from './nprogress.css'
import styles from './index.css'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  console.log(`Loading done`)
  NProgress.done()
}
Router.onRouteChangeError = () => {
  console.log(`Loading error`)
  NProgress.done()
}

const linkStyle = {
  margin: '0 10px 0 0'
}

export default class Header extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    notificationsCount: PropTypes.number,
  }

  static defaultProps = {
    user: {},
    notificationsCount: 0,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main_header_container">
        <style dangerouslySetInnerHTML={{ __html: NProgressCss }} />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="links_container">
          <Link href='/'><a style={linkStyle}>Home</a></Link>
          <Link href='/fetch'><a style={linkStyle}>Fetches</a></Link>
          <Link href='/redux2'><a style={linkStyle}>Redux 2</a></Link>
        </div>
        <div className="user_area_container">
          Hello, {'name' in this.props.user ? this.props.user.name : 'stranger'}<br/>
          Notifications: {this.props.notificationsCount}
        </div>
      </div>
    )
  }
}
