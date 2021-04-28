import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { IndexRoute } from 'react-router'
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import store from '../../store/index'
import {Provider} from 'react-redux'
import PrivateRoute from './PrivateRoute'
 
class RouterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h3>RouterPage</h3>
        <Provider store={store}>
          <BrowserRouter>
            <Link to='/'>home</Link>
            <Link to='/login'>login</Link>
            <Link to='/user'>user</Link>
            <Link to='/aaa'>aaa</Link>
            <Switch>
              {/* <IndexRoute component={HomePage} /> */}
              <Route exact path='/' component={HomePage}></Route>
              <Route path='/login' component={LoginPage}></Route>
              <PrivateRoute path='/user' component={UserPage}></PrivateRoute>
              <Route component={() => <div>404</div>}></Route>
            </Switch>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default RouterPage;