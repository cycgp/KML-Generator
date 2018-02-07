import React, { Component } from 'react';
import './App.css';
import Map from './components/Map/Map'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ResetButton from './components/ResetButton'

class App extends Component {
  render() {
    return (
      <div className="App">
  		<MuiThemeProvider>
			<Map/>
		</MuiThemeProvider>
		<MuiThemeProvider>
			<ResetButton/>
		</MuiThemeProvider>
      </div>
    );
  }
}

export default App;
