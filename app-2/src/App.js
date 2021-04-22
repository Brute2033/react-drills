import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      array: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  render(){
    return (
      <div className="App">
        <h2> {this.state.array[0]} </h2>
        <h2> {this.state.array[1]} </h2>
        <h2> {this.state.array[2]} </h2>
        <h2> {this.state.array[3]} </h2>
        <h2> {this.state.array[4]} </h2>
    </div>
    );
  }
}

export default App;
