import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './style';

class Category extends Component {
  componentDidMount () {
    this.props.fetchCategory();
  }
  formatCategoryDate (timestamp) {
    return $date(timestamp).format('MMM YYYY');
  }
  formatArticleDate (timestamp) {
    return $date(timestamp).format('MMM MM, YYYY');
  }
  render () {
    const { category } = this.props;
    return (
      <div className={ style.pageView }>
        <main className={ style.content }>
          {
            <div className={ style.categoryItem }>
              <p className={ style.categoryKeywords }>
                搜索到有
                <span className={ style.searchKeywords }>{ category.count || 0 }</span>
                篇与
                <span className={ style.searchKeywords }>{ category.keywords }</span>
                相关的文章
              </p>
              <div className={ style.articleList }>
                {
                  category.list.map((article, index) => (
                    <Link to={`/a/${article.id}`} key={ index } className={ style.articleListItem }>
                      <h3 className={ style.articleTitle }>{ article.title }</h3>
                      <div className={ style.articleMeta }>
                        <time className={ style.articleCreateDate }>{ this.formatArticleDate(article.meta.createDate) }</time>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          }
        </main>
      </div>
    );
  }
}

Category.propTypes = {
  fetchCategory: PropTypes.func,
  category: PropTypes.object
};

export default Category;
