import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { initStore, startClock, addCount, serverRenderClock } from './state/store'
import Page from './components/Page'
import styles from './style.sass'

class Counter extends React.Component {

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div className="example">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <Page title='Index Page' linkTo='/other' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
