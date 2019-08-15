import { connect } from 'react-redux';
import { fetchArchivesAsync } from '@/actions';
import Archives from './archives';

const mapStateToProps = state => {
  return {
    archives: state.archives
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArchives: () => dispatch(fetchArchivesAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Archives);
