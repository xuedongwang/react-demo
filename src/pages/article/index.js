import { connect } from 'react-redux';
import { fetchArticleContentAsync } from '@/actions';
import Article from './article';

const mapStateToProps = state => {
  return {
    article: state.article
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticleContent: () => dispatch(fetchArticleContentAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
