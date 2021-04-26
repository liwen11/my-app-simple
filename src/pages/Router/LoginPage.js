import React, { Component } from 'react';
import {connect} from 'react-redux'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    console.log(this.props)
    const {handleLogin, isLogin} = this.props
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