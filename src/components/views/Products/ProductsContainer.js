import { connect } from 'react-redux';
import { getAll, apiProducts } from '../../../redux/productsRedux';

import Products from './Products';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  apiProducts: (result) => dispatch(apiProducts(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
