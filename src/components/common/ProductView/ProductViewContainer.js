import { connect } from 'react-redux';

import ProductView from './ProductView.js';

import { addToCart } from '../../../redux/cartRedux';

const mapDispatchToProps = dispatch => ({
  addToCart: (name, image, totalPrice, _id, qty) =>
    dispatch(addToCart({name, image, totalPrice, _id, qty})),
});

export default connect(null, mapDispatchToProps)(ProductView);
