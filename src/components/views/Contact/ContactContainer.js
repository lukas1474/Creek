import { connect } from 'react-redux';
import { getAll } from '../../../redux/contactRedux';

import Contact from './Contact';

const mapStateToProps = state => ({
  contact: getAll(state),
});

console.log(getAll);

export default connect(mapStateToProps)(Contact);
