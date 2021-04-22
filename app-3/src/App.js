import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      filteredArr: '',
      array: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(value){
    this.setState({ filteredArr: value })
  }
  render() {
    let foodsToDisplay = this.state.array
    .filter((element, index) =>{
      return element.includes(this.state.filteredArr)
    } )
    .map((element, index) =>{
      return <h2 key={index}> {element} </h2>
    } ) 

    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange(e.target.value) } type="text" />
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
