import { connect } from 'react-redux';

import Cart from './Cart';

import { getAll } from '../../../redux/productsRedux';
import { getAllCarts, removeFromCart } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cart: getAllCarts(state),
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: () => dispatch(removeFromCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
