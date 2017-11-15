import React, { Component } from 'react';
import logo from './logo.svg';
import BigTimeWorkouts from './containers/BigTimeWorkouts'
import AddWorkout from './presentation/AddWorkout'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AddWorkout />
        <BigTimeWorkouts />
      </div>
    );
  }
}

export default App;
