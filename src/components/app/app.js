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
      ], 
      term: '',
      filter: 'all'
    }
    this.maxId = 4;
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
  }

  onToggleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      const old = data[index];
      const newItem = {...old, important: !old.important};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr 
      }
    })
  }

  onToggleLike(id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      const old = data[index];
      const newItem = {...old, like: !old.like};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  onDeleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  onAddItem(body) {
    const newItem = {
      label: body,
      important: false,
      like: false,
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  searchPosts(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => item.label.indexOf(term) > -1);
  }

  onUpdateSearch(term) {
    this.setState({term});
  }

  filterPosts(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.like);
    }
    return items;
  }

  onFilterSelect(filter) {
    this.setState({filter});
  }


  render() {
    const {data, term, filter} = this.state;
    const visiblePosts = this.filterPosts(this.searchPosts(data, term), filter);

    return (
      <div className='app'>
        <AppHeader/>
        <div className='search-panel d-flex'>
          <SearchPanel
           onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter
          filter={filter}
          onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList
          posts={visiblePosts}
          onImportant={this.onToggleImportant}
          onLike={this.onToggleLike}
          onDelete={this.onDeleteItem}/>
        <PostAddForm
          onAdd={this.onAddItem}/>
      </div>
    )
  }
} 