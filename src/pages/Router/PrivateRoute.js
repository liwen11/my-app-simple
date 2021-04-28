import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {isLogin, path, component} = this.props
    if (isLogin) {
      return <Route path={path} component={component}></Route>
    } else {
      return '404'
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state
  }
}
export default connect(mapStateToProps)(PrivateRoute);