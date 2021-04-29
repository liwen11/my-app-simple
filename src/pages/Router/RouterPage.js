import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch, NavLink } from 'react-router-dom'
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
    console.log(this)
    return (
      <>
        <h3>RouterPage</h3>
        <Provider store={store}>
          <BrowserRouter>
            <NavLink to='/' exact activeClassName='active'>home</NavLink>
            <NavLink to='/login' activeClassName='active'>login</NavLink>
            <NavLink to='/user' activeClassName='active'>user</NavLink>
            <NavLink to='/aaa' activeClassName='active'>aaa</NavLink>
            <Switch>
              {/* <Route path="/:id" children={<HomePage />} /> */}
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