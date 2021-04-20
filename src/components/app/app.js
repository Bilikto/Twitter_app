import React, { Component } from 'react';
import AppHeader from '../app_header';
import SearchPanel from '../search_panel';
import PostStatusFilter from '../post_status_filter';
import PostList from '../post_list';
import PostAddForm from '../post_add_form';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: 'Going to learn React', important: false, like: false, id: 1},
        {label: 'That is so good!', important: false, like: false, id: 2},
        {label: 'I need a break..', important: false, like: false, id: 3},
      ]
    }
  }

  render() {
    return (
      <div className='app'>
        <AppHeader/>
        <div className='search-panel d-flex'>
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList/>
        <PostAddForm/>
      </div>
    )
  }
} 