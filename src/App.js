import React, { Component } from 'react';
import logo from './logo.svg';
import BigTimeWorkouts from './containers/BigTimeWorkouts'
import AddSet from './presentation/AddSet'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BigTimeWorkouts />
        <AddSet />
      </div>
    );
  }
}

export default App;
