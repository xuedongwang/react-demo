import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './style';
import Pagination from '@/components/Pagination';
import { format } from 'timeago.js';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      total: 4,
      currentPage: 1,
      hotTags: {}
    };
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePrevPage = this.handlePrevPage.bind(this);
    this.handleJumpTo = this.handleJumpTo.bind(this);
  }
  componentDidMount () {
    this.props.fetchArticles();
    this.props.fetchHotTags();
  }
  handleNextPage () {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1
    }));
  }
  handlePrevPage () {
    this.setState(prevState => ({
      currentPage: prevState.currentPage - 1
    }));
  }
  handleJumpTo (e) {
    this.setState({
      currentPage: +e.target.dataset.page
    });
  }
  render () {
    const { total, currentPage } = this.state;
    const { articles, hotTags } = this.props;
    return (
      <div className={ style.pageView }>
        <main className={ style.content }>
          <section className={ style.articleWrapper }>
            <div className={ style.articleList }>
              {
                articles.list.map(article => (
                  <div key={ article.id } className={ style.articleItem }>
                    <h2 className={ style.articleTitle }>
                      <Link to={`/a/${article.id}`}>{ article.title }</Link>
                    </h2>
                    <div className={ style.articleMeta }>
                      <div className={ style.createDate }>{ format(article.createDate, 'zh_CN') }</div>
                      <div className={ style.commentCount }>{ article.commentCount }条评论</div>
                    </div>
                    <p className={ style.articleShortDesc }>{ article.articleShortDesc }</p>
                  </div>
                ))
              }
            </div>
            <Pagination
              currentPage={ currentPage }
              total={ total }
              onJumpTo={ this.handleJumpTo }
              onPrevPage={ this.handlePrevPage }
              onNextPage={ this.handleNextPage }
            ></Pagination>
          </section>
          <aside className={ style.aside }>
            <section className={ style.asideItem }>
              <h4 className={ style.asideItemTitle }>热门标签</h4>
              <div className={ style.asideItemContent }>
                {
                  hotTags.list.map(item => (
                    <Link className={ style.asideTagBtn } title={ item.name } key={ item.id } to={ `/tag/${item.id}` }>{ item.name }</Link>
                  ))
                }
              </div>
            </section>
          </aside>
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  fetchArticles: PropTypes.func,
  fetchHotTags: PropTypes.func,
  articles: PropTypes.object,
  total: PropTypes.number,
  currentPage: PropTypes.number,
  hotTags: PropTypes.object
};

export default Home;
