import React from "react";
import './app_header.css';

const AppHeader = ({liked, allPosts}) => {
  return (
    <div className='app-header d-flex'>
      <h1>Bilikto Dashiev</h1>
      <h2>Liked {liked} posts of {allPosts}</h2>
    </div>
  )
} 

export default AppHeader;