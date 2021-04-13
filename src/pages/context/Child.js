import React, { Component } from 'react';
import { themes, ThemeContext } from './ThemeContext'

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {
          (state) => (
            <div>
              <button onClick={state.toggleTheme}
                style={{ backgroundColor: state.theme.background }}>Toggle Theme</button>
              <h3>{state.theme.background}</h3>
            </div>
          )
        }
      </ThemeContext.Consumer>
    );
  }
}

export default Child;