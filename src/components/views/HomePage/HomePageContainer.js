import { connect } from 'react-redux';
import { getAll, apiSubpages } from '../../../redux/subpagesRedux';

import HomePage from './HomePage';

const mapStateToProps = state => ({
  subpages: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  apiSubpages: (results) => dispatch(apiSubpages(results)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
