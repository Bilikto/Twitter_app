import React, { Component } from 'react';
import './search_panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <input 
        type='text' 
        className='form-control search-input' 
        placeholder='Search by notes..'/>
    )
  }
}