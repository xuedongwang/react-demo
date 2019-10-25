import { connect } from 'react-redux';
import { fetchArticleContentAsync, fetchArticleCommentsAsync } from '@/actions';
import Article from './article';

const mapStateToProps = state => {
  return {
    article: state.article,
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticleContent: () => dispatch(fetchArticleContentAsync()),
    fetchArticleComments: () => dispatch(fetchArticleCommentsAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
