import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './style';
import { format } from 'timeago.js';

class Home extends Component {
  componentDidMount () {
    this.props.fetchArchives();
  }
  formatYear (timestamp) {
    return $date(timestamp).format('YYYY');
  }
  render () {
    const { archives } = this.props;
    return (
      <div className={ style.pageView }>
        <main className={ style.content }>
          {
            archives.map(archive => (
              <dl key={ archive.year } className={ style.archive }>
                <dt className={ style.archiveTitle }>{ this.formatYear(archive.year) }</dt>
                {
                  archive.list.map(article => (
                    <dd key={ article.id } className={ style.archiveItem }>
                      <Link to={ `/a/${article.id}` } className={ style.archiveItemTitle }>
                        <time className={ style.archiveItemCreateDate }>{ format(article.createDate, 'zh_CN') }</time>{ article.title }
                      </Link>
                    </dd>
                  ))
                }
              </dl>
            ))
          }
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  fetchArchives: PropTypes.func,
  archives: PropTypes.array
};

export default Home;
