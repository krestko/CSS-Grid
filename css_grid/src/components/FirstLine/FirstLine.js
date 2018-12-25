import React, { Component } from 'react';
import '../../App.css';
import './FirstLine.css';

class FirstLine extends Component {
  render() {
    return (
      <div className='Grid-item-1'>
        <div className='First-Line-1'>First-Line-1</div>
        <div className='First-Line-2'>First-Line-2</div>
        <div className='First-Line-3'>First-Line-3</div>
        <div className='First-Line-4'>First-Line-4</div>
        <div className='First-Line-5'>First-Line-5</div>
        <div className='First-Line-6'>First-Line-6</div>
      </div>
    );
  }
}

export default FirstLine;