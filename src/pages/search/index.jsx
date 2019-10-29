import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { connect } from 'dva';

class Search extends Component {
  componentDidMount () {
    this.props.dispatch({
      type: 'search/fetchTags'
    });
  }
  render () {
    const { tags } = this.props.search;
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
                    <a href={`/tag/${tag.id}`}># { tag.name } ({ tag.count })</a>
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
  dispatch: PropTypes.func,
  search: PropTypes.object,
  fetchTags: PropTypes.func,
  tags: PropTypes.object
};

export default connect(state => ({ ...state }))(Search);
