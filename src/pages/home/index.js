import { connect } from 'react-redux';
import { fetchArticlesAsync, fetchHotTagsAsync } from '@/actions';
import Home from './home';

const mapStateToProps = state => {
  return {
    articles: state.articles,
    hotTags: state.hotTags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: () => dispatch(fetchArticlesAsync()),
    fetchHotTags: () => dispatch(fetchHotTagsAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
