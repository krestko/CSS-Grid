import React, { Component } from 'react';
import FirstLine from './components/FirstLine/FirstLine';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='Grid-container'>
        <div className='Grid-item-1'><FirstLine /></div>
        <div className='Grid-item-2'></div>
        <div className='Grid-item-3'></div>
      </div>
    );
  }
}

export default App;
