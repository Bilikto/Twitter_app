import React, { Component } from 'react';
import './post_status_filter.css';

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'All'},
      {name: 'like', label: 'Liked'}
    ] 
  }

  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const active = this.props.filter === name;
      const class1 = active ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          key={name} 
          type='button' 
          className={`btn ${class1}`}
          onClick={() => this.props.onFilterSelect(name)}>{label}</button>
      )
    })

    return(
      <div className='btn-group'>
        {buttons}
      </div>
    )
  }
}