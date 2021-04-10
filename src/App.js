import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      date: new Date()
    };
  }
  componentDidMount() {
    // this.changeValue(1)
    // this.timer = setInterval(() => {
    //   this.setState({
    //     date: new Date()
    //   })
    // }, 1000)
  }
  componentWillUnmount() {
    // clearInterval(this.timer)
  }
  // changeValue(v) {
  changeValue = (v) => {
    console.log(this)
    // 链式更新state，用一个函数return参数或者用setTimeout
    // this.setState((state, props) => {
    //   return {
    //     counter: state.counter + v
    //   }
    // })
    // setState在合成事件及生命周期中是异步的。这里说的异步其实是批量更新，以达到优化性能的目的
    this.setState({
      counter: this.state.counter + v
    })
    // console.log("counter", this.state.counter);
  };
  // setCounter() {
  setCounter = () => {
    console.log(this)
    // setState在原生事件及setTimeout中是同步的
    // setTimeout(() => {
      this.changeValue(1);
      this.changeValue(2);
    // }, 0)
    
  };
  render() { 
    console.log(this)
    const {counter, date} = this.state
    return ( 
      <div>
        <h1>it is {date.toLocaleTimeString()}</h1>
        <button onClick={this.setCounter}>counter:{counter}</button>
        <p onClick={this.setCounter}>counter: {counter}</p>
      </div>
     );
  }
}
 
export default App;