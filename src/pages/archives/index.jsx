import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import style from './style.scss';
import { format } from 'timeago.js';

class Home extends Component {
  componentDidMount () {
    this.props.dispatch({
      type: 'archives/fetchArchives'
    });
  }
  formatYear (timestamp) {
    return $date(timestamp).format('YYYY');
  }
  render () {
    const { archives } = this.props.archives;
    return (
      <div className={ style.pageView }>
        <main className={ style.content }>
          {
            archives.list.map(archive => (
              <dl key={ archive.year } className={ style.archive }>
                <dt className={ style.archiveTitle }>{ this.formatYear(archive.year) }</dt>
                {
                  archive.list.map(article => (
                    <dd key={ article.id } className={ style.archiveItem }>
                      <a href={ `/a/${article.id}` } className={ style.archiveItemTitle }>
                        <time className={ style.archiveItemCreateDate }>{ format(article.createDate, 'zh_CN') }</time>{ article.title }
                      </a>
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
  dispatch: PropTypes.func,
  archives: PropTypes.object
};

export default connect(state => ({ ...state }))(Home);
