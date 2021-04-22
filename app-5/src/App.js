import React, {Component} from 'react';
import './App.css';
import Image from './components/Image'


class App extends Component{
  render(){
    return (
      <div className="App">
        <Image url={'https://images7.memedroid.com/images/UPLOADED801/5bd60012ab521.jpeg'} />
      </div>
    );
  }
}

export default App;
