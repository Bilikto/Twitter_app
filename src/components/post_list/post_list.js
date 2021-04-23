import React from 'react';
import PostListItem from '../post_list_item';
import './post_list.css';

const PostList = ({posts, onImportant, onLike}) => {

  const elements = posts.map(item => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...itemProps}
          onImportant={() => onImportant(id)}
          onLike={() => onLike(id)}/>
      </li>
    )
  })

  return (
    <ul className='app-list list-group'>
      {elements}
    </ul>
  )
}

export default PostList;