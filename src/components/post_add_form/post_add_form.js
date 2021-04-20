import React, { Component } from 'react';
import './post_add_form.css';

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form className='bottom-panel d-flex'>
        <input 
          type='text' 
          placeholder='What are you thinking about?'
          className='form-control new-post-label'/>
          <button 
            type='submit'
            className='btn btn-outline-secondary'>
            Add
          </button>
      </form>
    )
  }
}