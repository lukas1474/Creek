import { connect } from 'react-redux';
import { getAll } from '../../../redux/subpagesRedux';

import HomePage from './HomePage';

const mapStateToProps = state => ({
  subpages: getAll(state),
});

export default connect(mapStateToProps)(HomePage);
