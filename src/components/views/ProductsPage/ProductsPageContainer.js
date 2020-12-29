import { connect } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';

import ProductsPage from './ProductsPage';

const mapStateToProps = (state, props) => {
  const product = getProductById(state, props.match.params.productsId);
  return {
    product,
  };
};

export default connect(mapStateToProps)(ProductsPage);
