import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <div className={styles.root}>
      <h1>Koszyk</h1>
    </div>
  );
};

Cart.propTypes = {
  children: PropTypes.node,
  addToCart: PropTypes.func,
};

export default Cart;
