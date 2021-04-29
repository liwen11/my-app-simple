import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router'
import HomePage from './HomePage';
import UserPage from './UserPage';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(React.createClass)
    return ( 
      <>
      {/* <Router>
        <Link to='/home'>home</Link>
        <Link to='/user'>user</Link>
        
          <Route path='/home' component={HomePage}></Route>
          <Route path='/user' component={UserPage}></Route>
        </Router> */}
      </>
     );
  }
}
 
export default IndexPage;