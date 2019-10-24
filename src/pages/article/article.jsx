import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './style';
import { format } from 'timeago.js';
import Markdown from '@/components/Markdown';

class Article extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showHistoryVersions: false,
      comments: [],
      commentsCount: 0
    };
    this.handleToggleShowHistoryVertions = this.handleToggleShowHistoryVertions.bind(this);
  }
  componentDidMount () {
    this.props.fetchArticleContent();
    this.props.fetchArticleComments();
  }
  formatCreate (timestamp) {
    return $date(timestamp).format('YYYY.MM.DD');
  }
  handleToggleShowHistoryVertions (e) {
    this.setState(prevState => ({
      showHistoryVersions: !prevState.showHistoryVersions
    }));
  }
  formatComments (comments) {
    const commentList = JSON.parse(JSON.stringify(comments.list || []));
    const firstLevelComments = commentList.filter(item => !item.pid);
    const secondLevelComments = commentList.filter(item => item.pid);
    console.log(firstLevelComments);
    console.log(secondLevelComments);
  }
  render () {
    const { showHistoryVersions } = this.state;
    const { article, comments } = this.props;
    this.formatComments(comments);
    return (
      <div className={ style.articleView }>
        <main className={ style.content }>
          <article className={ style.article }>
            <h2 className={ style.title }>{ article.title }</h2>
            <div className={ style.articleMeta }>
              <time className={ style.createDate }>{ this.formatCreate(article.createDate) }</time>
            </div>
            <div className={ style.articleContent }>
              <Markdown>{ article.content }</Markdown>
            </div>
            {/* <div className={ `markdown-body ${style.artileContent} ${style.artileContentStyle}` } dangerouslySetInnerHTML={{ __html: article.content }}></div> */}
            <div className={ style.articleCopyright }>
              {
                article.isOriginal
                  ? (
                    <div className={ style.articleCopyright }>
                      <div className={ style.author }>作者：Joey Feng</div>
                      <p className={ style.copyrightDesc }>© 文章版权为优旁博客所有，转载请注明来源和原文链接。</p>
                    </div>
                  ) : (
                    <p className={ style.copyrightDesc }>原文链接：{ article.originalUrl }</p>
                  )
              }
              <div className={ style.historyVersion }>
                <div onClick={ this.handleToggleShowHistoryVertions }>修改记录<i className={`icon-sanjiao iconfont ${style.moreIcon}`}></i></div>
                {
                  showHistoryVersions && <div className={ style.historyVersionDisplay }>
                    <div className={ style.versionItem }>2019-08-12 14:10:29 xxx </div>
                    <div className={ style.versionItem }>2019-08-12 14:10:29 xxx </div>
                    <div className={ style.versionItem }>2019-08-12 14:10:29 xxx </div>
                  </div>
                }
              </div>
            </div>
            <div className={ style.articleFooter }>
              <ul className={ style.articleTags }>
                {
                  article.tags.map(tag => (
                    <li key={ tag.id } className={ style.articleTagsItem }>
                      <Link to={ `/tag/${tag.id}` }>#{ tag.name }</Link>
                    </li>
                  ))
                }
              </ul>
              <div className={ style.recommendWrapper }>
                <p className={ style.moreReadTip }>更多阅读:</p>
                <div className={ style.recommend }>
                  <Link to={`/a/dadasdasd`} className={ style.articleListItem }>
                    <h3 className={ style.articleTitle }>MAT 分析 Heap Dump 需要关注的指标</h3>
                    <div className={ style.articleMeta }>
                      <time className={ style.articleCreateDate }>Aug 08, 2019</time>
                    </div>
                  </Link>
                  <Link to={`/a/dadasdasd`} className={ style.articleListItem }>
                    <h3 className={ style.articleTitle }>MAT 分析 Heap Dump 需要关注的指标</h3>
                    <div className={ style.articleMeta }>
                      <time className={ style.articleCreateDate }>Aug 08, 2019</time>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </article>
          <div className={ style.addComment }>
            <p className={ style.addCommentTip }>发表评论</p>
            <div className={ style.addCommentUserInfo }>
              <div className={ style.addCommentInputItem }>
                <label className={ style.inputLabel } htmlFor="username">
                  <span className={ style.labelText }>姓名</span>
                </label>
                <input className={ style.addCommentInput } type="text"/>
              </div>
              <div className={ style.addCommentInputItem }>
                <label className={ style.inputLabel } htmlFor="username">
                  <span className={ style.labelText }>电子邮件</span>
                </label>
                <input className={ style.addCommentInput } type="text"/>
              </div>
              <div className={ style.addCommentInputItem }>
                <label className={ style.inputLabel } htmlFor="username">
                  <span className={ style.labelText }>站点</span>
                </label>
                <input className={ style.addCommentInput } type="text"/>
              </div>
            </div>
            <div className={ `${style.addCommentInputItem} ${style.addCommentTextareaItem}` }>
              <label className={ style.inputLabel } htmlFor="username">
                <span className={ style.labelText }>评论 <span className={ style.replyOther }>对<span className={ style.replayUsername }>C</span>进行回复</span><span className={ style.cancelReply }>取消回复</span></span>
              </label>
              <textarea className={ `${style.addCommentInput} ${style.addCommentTexrarea}` }></textarea>
            </div>
            <button className={ style.submitComment }>提交评价</button>
          </div>
          <div className={ style.comment }>
            <p className={ style.commentTitle }>{ comments.count }条回应：“友情链接”</p>
            <ul className={ style.commentList }>
              {
                comments.list && comments.list.map(comment => (
                  <li className={ style.commentItem } key={ comment.id }>
                    <div className={ style.initComment }>
                      <div className={ `clearfix ${style.commentUserInfo}` }>
                        <img src="//placehold.it/600x600" className={ `fl ${style.avatar}` }></img>
                        <div className={ `fl ${style.infoBlock}` }>
                          <div className={ style.commentUsername }>{ comment.username }<span className={ style.say }>说道:</span></div>
                          <div className={ style.commentDate }>{ format(comment.commentDate, 'zh_CN') }</div>
                        </div>
                        <div className={ `fr ${style.reply}` }>@回复</div>
                      </div>
                      <p className={ style.commentContent }>{ comment.content }</p>
                    </div>
                    <div className={ style.childtenCommentWrapper }>
                      {
                        comment.children.map(childComment => (
                          <div className={ style.childrenComments } key={ childComment.id }>
                            <div className={ `clearfix ${style.commentUserInfo}` }>
                              <img src="//placehold.it/600x600" className={ `fl ${style.avatar}` }></img>
                              <div className={ `fl ${style.infoBlock}` }>
                                <div className={ style.commentUsername }>{ childComment.userSite ? <a href={ childComment.userSite }>{ childComment.username }</a> : childComment.username }<span className={ style.say }>说道:</span></div>
                                <div className={ style.commentDate }>{ format(childComment.commentDate, 'zh_CN') }</div>
                              </div>
                              <div className={ `fr ${style.reply}` }>@回复</div>
                            </div>
                            <p className={ style.commentContent }>{ childComment.content }</p>
                          </div>
                        ))
                      }
                    </div>
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

Article.propTypes = {
  fetchArticleContent: PropTypes.func,
  fetchArticleComments: PropTypes.func,
  article: PropTypes.object,
  comments: PropTypes.object
};

export default Article;
