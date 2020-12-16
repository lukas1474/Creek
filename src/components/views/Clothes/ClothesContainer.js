import { connect } from 'react-redux';
import { getAll } from '../../../redux/clothesRedux';

import Clothes from './Clothes';

const mapStateToProps = state => ({
  clothes: getAll(state),
});

export default connect(mapStateToProps)(Clothes);
