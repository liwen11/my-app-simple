import React, { Component } from 'react';
import {themes, ThemeContext} from './ThemeContext'
import Middle from './Middle'

class Context extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      theme: themes.light,
      toggleTheme: this.toggleTheme
     };
  }
  toggleTheme = (e) => {
    console.log(e)
    this.setState(state => ({
      theme: state.theme === themes.dark? themes.light: themes.dark
    }))
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Middle />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default Context;