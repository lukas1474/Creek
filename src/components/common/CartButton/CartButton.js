import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartButton.module.scss';

import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CartButton = () => {
  return (
    <Button variant="secondary" title="Add to Cart" className={styles.cartButton}>
      <FontAwesomeIcon icon={faShoppingBasket} className={styles.icon}></FontAwesomeIcon>
    </Button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  Comp: PropTypes.string,
};

export default CartButton;
