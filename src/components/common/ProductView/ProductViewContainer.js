import { connect } from 'react-redux';

import ProductView from './ProductView.js';

import { addToCart } from '../../../redux/cartRedux';

const mapDispatchToProps = dispatch => ({
  addToCart: (name, image, price, _id) =>
    dispatch(addToCart({ name, image, price, _id })),
});

export default connect(null, mapDispatchToProps)(ProductView);
