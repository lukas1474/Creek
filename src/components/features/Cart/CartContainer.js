import { connect } from 'react-redux';

import Cart from './Cart';

import { getAll } from '../../../redux/productsRedux';
import { getAllCarts } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cart: getAllCarts(state),
  products: getAll(state),
});

export default connect(mapStateToProps)(Cart);
