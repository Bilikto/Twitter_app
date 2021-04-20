import React from 'react';
import PostListItem from '../post_list_item';
import './post_list.css';

const PostList = () => {
  return (
    <ul className='app-list list-group'>
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
    </ul>
  )
}

export default PostList;