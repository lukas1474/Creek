import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cart.module.scss';
import ProductView from '../../common/ProductView/ProductView';

class Cart extends React.Component {

  render() {

    const { cart } = this.props;
    console.log(cart);

    if (cart.length > 0) {
      return (
        <div className={styles.root}>
          {cart.map(item => (
            <div className={styles.productView} key={item._id}>
              <ProductView {...item} />
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

Cart.propTypes = {
  children: PropTypes.node,
  addToCart: PropTypes.func,
  cart: PropTypes.any,
};

Cart.defaultProps = {
  cart: [],
};

export default Cart;
