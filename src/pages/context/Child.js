import React, { Component } from 'react';
import { themes, ThemeContext } from './ThemeContext'

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.context)
    const { theme, toggleTheme } = this.context
    return (
      // <ThemeContext.Consumer>
      //   {
      //     (state) => (
      //       <div>
      //         <button onClick={toggleTheme}
      //           style={{ backgroundColor: theme.background }}>Toggle Theme</button>
      //         <h3>{theme.background}</h3>
      //       </div>
      //     )
      //   }
      // </ThemeContext.Consumer>
      <div>
        <button onClick={toggleTheme}
          style={{ backgroundColor: theme.background }}>Toggle Theme</button>
        <h3>{theme.background}</h3>
      </div>
    );
  }
}
Child.contextType = ThemeContext;
export default Child;