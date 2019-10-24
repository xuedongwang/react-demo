import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './style';

class Search extends Component {
  componentDidMount () {
    this.props.fetchTags();
  }
  render () {
    const { tags } = this.props;
    return (
      <div className={ style.searchView }>
        <main className={ style.content }>
          <section className={ style.searchWraper }>
            <div className={ style.searchContent }>
              <input className={ style.searchInput } placeholder="search...." type="text"/>
              <i className={`iconfont icon-sousuo ${style.searchIcon}`}></i>
            </div>
          </section>
          <div className={ style.searchTags }>
            <p className={ style.helpGuide }>👇 The following tabs can help you!</p>
            <ul className={ style.tagsList }>
              {
                tags.list.map(tag => (
                  <li key={ tag.id } className={ style.tagItem }>
                    <Link to={`/tag/${tag.id}`}># { tag.name } ({ tag.count })</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

Search.propTypes = {
  fetchTags: PropTypes.func,
  tags: PropTypes.object
};

export default Search;
