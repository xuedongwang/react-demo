import { connect } from 'react-redux';
import { fetchCategoryAsync } from '@/actions';
import Category from './category';

const mapStateToProps = state => {
  return {
    category: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategory: () => dispatch(fetchCategoryAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
