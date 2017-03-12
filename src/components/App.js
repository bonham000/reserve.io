import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RestaurantCard from './card';
import './App.css';

import Form from '../containers/form'
=======
const styles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={styles}>
          <h1>Welcome to Reserve!</h1>
          <Form />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
