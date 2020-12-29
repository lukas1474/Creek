import { connect } from 'react-redux';

import ProductView from './ProductView.js';

import { addToCart } from '../../../redux/cartRedux';

const mapDispatchToProps = dispatch => ({
  addToCart: (name, image, price) =>
    dispatch(addToCart({ name, image, price })),
});

export default connect(null, mapDispatchToProps)(ProductView);
