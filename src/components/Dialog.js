import React, { Component } from 'react';
import {createPortal} from 'react-dom'

const modalRoot = document.getElementById('modal-root')
class Dialog extends Component {
  constructor(props) {
    super(props);
    this.node = window.document.createElement('div')
    // window.document.body.appendChild(this.node)
    console.log(this.node)
  }
  componentDidMount() {
    // window.document.body.appendChild(this.node)
    modalRoot.appendChild(this.node)
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.node);
  }
  render() {
    return createPortal(
      <div className="dialog">
        <h3>Dialog</h3>
        {this.props.children}
      </div>,
      this.node,
    );
  }
}

export default Dialog;