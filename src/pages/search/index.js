import { connect } from 'react-redux';
import Search from './search';
import { fetchTagsAsync } from '@/actions';

const mapStateToProps = state => {
  return {
    tags: state.tags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTags: () => dispatch(fetchTagsAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
