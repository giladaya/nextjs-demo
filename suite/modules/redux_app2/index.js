import React from 'react'
import { connect } from 'react-redux'
import { addCount } from './state/actions'
import { bindActionCreators } from 'redux'

const Count = ({count, addCount}) => (
  <div>
    Counter: {count}<br/>
    <button onClick={addCount}>Add to count</button>
  </div>
)

const mapStateToProps = state => {
  return {
    count: state.counter2.count,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addCount: () => dispatch(addCount()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Count)
