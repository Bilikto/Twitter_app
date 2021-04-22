import React from 'react';
import './post_list_item.css';

const PostListItem = ({label, onImportant, important}) => {

  let className = 'app-list-item d-flex justify-content-between';
  if (important) {
    className += ' important';
  }

  return (
    <div className={className}>
      <span className='app-list-item-label'>
        {label}
      </span>
      <div className='d-flex justify-content-center align-items-center'>
        <button 
          type='button' 
          className='btn-star btn-sm'
          onClick={onImportant}>
          <i className='fa fa-star'></i>
        </button>
        <button type='button' className='btn-trash btn-sm'>
          <i className='fa fa-trash-o'></i>
        </button>
        <i className='fa fa-heart'></i>
      </div>
    </div>
  )
} 

export default PostListItem;