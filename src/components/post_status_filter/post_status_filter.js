import React, { Component } from 'react';
import './post_status_filter.css';

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='btn-group'>
        <button type='button' className='btn btn-info'>Liked</button>
        <button type='button' className='btn btn-outline-secondary'>All</button>
      </div>
    )
  }
}