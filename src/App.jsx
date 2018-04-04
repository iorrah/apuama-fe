import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Gallery from './components/Gallery';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Gallery />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
