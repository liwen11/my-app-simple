// ⾼阶组件HOC: 是一个函数，接收一个组件返回一个新组件
import React, { Component } from 'react';
import { Button } from 'antd';
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
@foo2
@foo
class Child extends Component {
  render() { 
    return ( 
      <h1>Child Component</h1>
     );
  }
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
        <Child name={'444'}/>
        <Button type="primary">Primary Button</Button>
      </div>
    );
  }
}

export default HocPage;