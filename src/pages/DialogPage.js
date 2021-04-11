import React, { Component } from 'react';
import Dialog from '../components/Dialog'

class DialogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showDialog: false,
      count: 0
     };
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
      showDialog: !this.state.showDialog
    })
  }
  render() {
    const {showDialog, count} = this.state
    // console
    return (
      <div>
        <h3>DialogPage</h3>
        <p>{count}</p>
        <button onClick={() => {
          this.setState({showDialog: !showDialog})
        }}>
          toggle
          </button>
          {showDialog && <Dialog> 
            <button onClick={this.handleClick}>click</button> 
            <input /> 
            <div style={{height: 1000 + 'px'}}>1000</div>
          </Dialog>}
      </div>
    );
  }
}

export default DialogPage;