import React, { Component } from 'react';
// import store from '../store/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class ReduxPage extends Component {
  constructor(props) {
    super(props);
    // this.state = { num: 0 };
  }
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.forceUpdate()
  //   })
  // }
  // add=() => {
  //   store.dispatch({type: 'ADD'})
  // }
  // asyAdd=() => {
  //   store.dispatch((dispatch) => {
  //     setTimeout(() => {
  //       dispatch({type: 'ADD'})
  //     }, 1000)
  //   })
  // }
  render() {
    const {count, add, minus, asyAdd} = this.props
    return (
      <>
        {/* <p>{store.getState()}</p> */}
        <p>{count}</p>
        <button onClick={add}>Add</button>
        <button onClick={minus}>minus</button>
        <button onClick={asyAdd}>asyAdd</button>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    count: state
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  let res = {
    add: () => ({type: 'ADD'}),
    minus: () => ({type: 'MINUS'}),
  }
  return {...bindActionCreators(res, dispatch), asyAdd: () => {
    setTimeout(() => {
      dispatch({type: 'ADD'})
    }, 1000)
  }}
  // return {
  //   add: () => {
  //     dispatch({type: 'ADD'})
  //   },
  //   minus: () => {
  //     dispatch({type: 'MINUS'})
  //   },
  //   asyAdd: () => {
  //     // dispatch((dispatch) => {
  //       setTimeout(() => {
  //         dispatch({type: 'ADD'})
  //       }, 1000)
  //     // })
  //   }
  // }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage);