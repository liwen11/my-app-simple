import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentWillUnmount() {
    console.log(this.props)
  }
  render() {
    console.log(this.props)
    const {handleLogin, isLogin} = this.props
    // const {redirect} = ownProps.location.state
    // if (redirect) {
    //   return <Redirect to={{
    //     pathname: redirect
    //   }}></Redirect>
    // }
    return (
      <>
        <h3>LoginPage, {String(isLogin)}</h3>
        <button onClick={handleLogin}>登录</button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleLogin: () => {
      dispatch({type: 'LOGIN'})
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);