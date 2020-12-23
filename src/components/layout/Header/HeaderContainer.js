import { connect } from 'react-redux';
import { getAll } from '../../../redux/accessoriesRedux';

import Accessories from './Accessories';

const mapStateToProps = state => ({
  accessories: getAll(state),
});

export default connect(mapStateToProps)(Accessories);
