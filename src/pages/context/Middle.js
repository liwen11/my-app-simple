import React, { Component } from 'react';
import Child from './Child'

class Middle extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className={'middle'}>
        <Child></Child>
      </div>
    );
  }
}

export default Middle;