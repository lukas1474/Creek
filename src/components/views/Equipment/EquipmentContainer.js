import { connect } from 'react-redux';
import { getAll } from '../../../redux/equipmentRedux';

import Equipment from './Equipment';

const mapStateToProps = state => ({
  equipment: getAll(state),
});

export default connect(mapStateToProps)(Equipment);
