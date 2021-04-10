// ⾼阶组件HOC: 是一个函数，接收一个组件返回一个新组件
import React, { Component } from 'react';

@foo
class Child extends Component {
  state = {  }
  render() { 
    return ( 
      <h1>Child Component</h1>
     );
  }
}

const foo = (Cmp) => (props) => {
  console.log(props)
  return (
    <div className='border'>
      <Cmp {...props}></Cmp>
    </div>
  )
}

const foo2 = (Cmp) => (props) => {
  console.log(props)
  return (
    <div className='greenBorder'>
      <Cmp {...props}></Cmp>
    </div>
  )
}

// const Foo = foo2(foo(child))
class HocPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <p>HocPage</p>
        <Child />
      </div>
    );
  }
}

export default HocPage;