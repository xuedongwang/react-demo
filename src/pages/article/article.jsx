import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './style';
import 'github-markdown-css';
import 'prismjs/themes/prism-okaidia.css';

class Article extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showHistoryVersions: false
    };
    this.handleToggleShowHistoryVertions = this.handleToggleShowHistoryVertions.bind(this);
  }
  componentDidMount () {
    this.props.fetchArticleContent();
  }
  formatCreate (timestamp) {
    return $date(timestamp).format('YYYY.MM.DD');
  }
  handleToggleShowHistoryVertions (e) {
    this.setState(prevState => ({
      showHistoryVersions: !prevState.showHistoryVersions
    }));
  }
  render () {
    const { showHistoryVersions } = this.state;
    const { article } = this.props;
    return (
      <div className={ style.articleView }>
        <main className={ style.content }>
          <article className={ style.article }>
            <h2 className={ style.title }>{ article.title }</h2>
            <div className={ style.articleMeta }>
              <time className={ style.createDate }>{ this.formatCreate(article.createDate) }</time>
            </div>
            <div className={ `markdown-body ${style.artileContent} ${style.artileContentStyle}` } dangerouslySetInnerHTML={{ __html: article.content }}></div>
            {/* <div className={ style.articleCopyright }>
              <div className={ style.author }>作者：Joey Feng</div>
              <p className={ style.copyrightDesc }>© 文章版权为优旁博客所有，转载请注明来源和原文链接。</p>
            </div> */}
            <div className={ style.articleCopyright }>
              <p className={ style.copyrightDesc }>原文链接：https://www.baidu.com/</p>
              <div className={ style.historyVersion }>
                <div onClick={ this.handleToggleShowHistoryVertions }>历史版本<i className={`icon-sanjiao iconfont ${style.moreIcon}`}></i></div>
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
          <div className={ style.comment }>
            <p className={ style.commentTitle }>294条回应：“友情链接”</p>
            <ul className={ style.commentList }>
              <li className={ style.commentItem }>
                <div className={ style.initComment }>
                  <div className={ `clearfix ${style.commentUserInfo}` }>
                    <img src="https://image.biji.io/wp-content/uploads/gravatar/9fde6012eaf81b21a40d22f970743fce-s120.jpg?imageView2/0/format/webp" className={ `fl ${style.avatar}` }></img>
                    <div className={ `fl ${style.infoBlock}` }>
                      <div className={ style.commentUsername }>小马哥哥<span className={ style.say }>说道:</span></div>
                      <div className={ style.commentDate }>12天前</div>
                    </div>
                    <div className={ `fr ${style.reply}` }>@回复</div>
                  </div>
                  <p className={ style.commentContent }>你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹</p>
                </div>
                <div className={ style.childtenCommentWrapper }>
                  <div className={ style.childrenComments }>
                    <div className={ `clearfix ${style.commentUserInfo}` }>
                      <img src="https://image.biji.io/wp-content/uploads/gravatar/9fde6012eaf81b21a40d22f970743fce-s120.jpg?imageView2/0/format/webp" className={ `fl ${style.avatar}` }></img>
                      <div className={ `fl ${style.infoBlock}` }>
                        <div className={ style.commentUsername }>小马哥哥<span className={ style.say }>说道:</span></div>
                        <div className={ style.commentDate }>12天前</div>
                      </div>
                      <div className={ `fr ${style.reply}` }>@回复</div>
                    </div>
                    <p className={ style.commentContent }>你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹</p>
                  </div>
                  <div className={ style.childrenComments }>
                    <div className={ `clearfix ${style.commentUserInfo}` }>
                      <img src="https://image.biji.io/wp-content/uploads/gravatar/9fde6012eaf81b21a40d22f970743fce-s120.jpg?imageView2/0/format/webp" className={ `fl ${style.avatar}` }></img>
                      <div className={ `fl ${style.infoBlock}` }>
                        <div className={ style.commentUsername }>小马哥哥<span className={ style.say }>说道:</span></div>
                        <div className={ style.commentDate }>12天前</div>
                      </div>
                      <div className={ `fr ${style.reply}` }>@回复</div>
                    </div>
                    <p className={ style.commentContent }>你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹</p>
                  </div>
                  <div className={ style.childrenComments }>
                    <div className={ `clearfix ${style.commentUserInfo}` }>
                      <img src="https://image.biji.io/wp-content/uploads/gravatar/9fde6012eaf81b21a40d22f970743fce-s120.jpg?imageView2/0/format/webp" className={ `fl ${style.avatar}` }></img>
                      <div className={ `fl ${style.infoBlock}` }>
                        <div className={ style.commentUsername }>小马哥哥<span className={ style.say }>说道:</span></div>
                        <div className={ style.commentDate }>12天前</div>
                      </div>
                      <div className={ `fr ${style.reply}` }>@回复</div>
                    </div>
                    <p className={ style.commentContent }>你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹</p>
                  </div>
                </div>
              </li>
              <li className={ style.commentItem }>
                <div className={ style.initComment }>
                  <div className={ `clearfix ${style.commentUserInfo}` }>
                    <img src="https://image.biji.io/wp-content/uploads/gravatar/9fde6012eaf81b21a40d22f970743fce-s120.jpg?imageView2/0/format/webp" className={ `fl ${style.avatar}` }></img>
                    <div className={ `fl ${style.infoBlock}` }>
                      <div className={ style.commentUsername }>小马哥哥<span className={ style.say }>说道:</span></div>
                      <div className={ style.commentDate }>12天前</div>
                    </div>
                    <div className={ `fr ${style.reply}` }>@回复</div>
                  </div>
                  <p className={ style.commentContent }>你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹</p>
                </div>
                <div className={ style.childtenCommentWrapper }>
                  <div className={ style.childrenComments }>
                    <div className={ `clearfix ${style.commentUserInfo}` }>
                      <img src="https://image.biji.io/wp-content/uploads/gravatar/9fde6012eaf81b21a40d22f970743fce-s120.jpg?imageView2/0/format/webp" className={ `fl ${style.avatar}` }></img>
                      <div className={ `fl ${style.infoBlock}` }>
                        <div className={ style.commentUsername }>小马哥哥<span className={ style.say }>说道:</span></div>
                        <div className={ style.commentDate }>12天前</div>
                      </div>
                      <div className={ `fr ${style.reply}` }>@回复</div>
                    </div>
                    <p className={ style.commentContent }>你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹</p>
                  </div>
                  <div className={ style.childrenComments }>
                    <div className={ `clearfix ${style.commentUserInfo}` }>
                      <img src="https://image.biji.io/wp-content/uploads/gravatar/9fde6012eaf81b21a40d22f970743fce-s120.jpg?imageView2/0/format/webp" className={ `fl ${style.avatar}` }></img>
                      <div className={ `fl ${style.infoBlock}` }>
                        <div className={ style.commentUsername }>小马哥哥<span className={ style.say }>说道:</span></div>
                        <div className={ style.commentDate }>12天前</div>
                      </div>
                      <div className={ `fr ${style.reply}` }>@回复</div>
                    </div>
                    <p className={ style.commentContent }>你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹</p>
                  </div>
                  <div className={ style.childrenComments }>
                    <div className={ `clearfix ${style.commentUserInfo}` }>
                      <img src="https://image.biji.io/wp-content/uploads/gravatar/9fde6012eaf81b21a40d22f970743fce-s120.jpg?imageView2/0/format/webp" className={ `fl ${style.avatar}` }></img>
                      <div className={ `fl ${style.infoBlock}` }>
                        <div className={ style.commentUsername }>小马哥哥<span className={ style.say }>说道:</span></div>
                        <div className={ style.commentDate }>12天前</div>
                      </div>
                      <div className={ `fr ${style.reply}` }>@回复</div>
                    </div>
                    <p className={ style.commentContent }>你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹</p>
                  </div>
                </div>
              </li>
              <li className={ style.commentItem }>
                <div className={ style.initComment }>
                  <div className={ `clearfix ${style.commentUserInfo}` }>
                    <img src="https://image.biji.io/wp-content/uploads/gravatar/9fde6012eaf81b21a40d22f970743fce-s120.jpg?imageView2/0/format/webp" className={ `fl ${style.avatar}` }></img>
                    <div className={ `fl ${style.infoBlock}` }>
                      <div className={ style.commentUsername }>小马哥哥<span className={ style.say }>说道:</span></div>
                      <div className={ style.commentDate }>12天前</div>
                    </div>
                    <div className={ `fr ${style.reply}` }>@回复</div>
                  </div>
                  <p className={ style.commentContent }>你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹</p>
                </div>
                <div className={ style.childtenCommentWrapper }>
                  <div className={ style.childrenComments }>
                    <div className={ `clearfix ${style.commentUserInfo}` }>
                      <img src="https://image.biji.io/wp-content/uploads/gravatar/9fde6012eaf81b21a40d22f970743fce-s120.jpg?imageView2/0/format/webp" className={ `fl ${style.avatar}` }></img>
                      <div className={ `fl ${style.infoBlock}` }>
                        <div className={ style.commentUsername }>小马哥哥<span className={ style.say }>说道:</span></div>
                        <div className={ style.commentDate }>12天前</div>
                      </div>
                      <div className={ `fr ${style.reply}` }>@回复</div>
                    </div>
                    <p className={ style.commentContent }>你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹</p>
                  </div>
                  <div className={ style.childrenComments }>
                    <div className={ `clearfix ${style.commentUserInfo}` }>
                      <img src="https://image.biji.io/wp-content/uploads/gravatar/9fde6012eaf81b21a40d22f970743fce-s120.jpg?imageView2/0/format/webp" className={ `fl ${style.avatar}` }></img>
                      <div className={ `fl ${style.infoBlock}` }>
                        <div className={ style.commentUsername }>小马哥哥<span className={ style.say }>说道:</span></div>
                        <div className={ style.commentDate }>12天前</div>
                      </div>
                      <div className={ `fr ${style.reply}` }>@回复</div>
                    </div>
                    <p className={ style.commentContent }>你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹</p>
                  </div>
                  <div className={ style.childrenComments }>
                    <div className={ `clearfix ${style.commentUserInfo}` }>
                      <img src="https://image.biji.io/wp-content/uploads/gravatar/9fde6012eaf81b21a40d22f970743fce-s120.jpg?imageView2/0/format/webp" className={ `fl ${style.avatar}` }></img>
                      <div className={ `fl ${style.infoBlock}` }>
                        <div className={ style.commentUsername }>小马哥哥<span className={ style.say }>说道:</span></div>
                        <div className={ style.commentDate }>12天前</div>
                      </div>
                      <div className={ `fr ${style.reply}` }>@回复</div>
                    </div>
                    <p className={ style.commentContent }>你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹你好，我用了你的这个主题，请问连接列表的样式怎么做的呀？请翻牌！蟹蟹</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
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
        </main>
      </div>
    );
  }
}

Article.propTypes = {
  fetchArticleContent: PropTypes.func,
  article: PropTypes.object
};

export default Article;
