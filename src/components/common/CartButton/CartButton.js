import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartButton.module.scss';

import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { addToCart } from '../../../redux/cartRedux';

const CartButton = (props, item, name) => {
  console.log(props);
  return (
    <Button variant="secondary" title="Add to Cart" onClick={() => props.addToCart(item)} className={styles.cartButton} >
      <FontAwesomeIcon icon={faShoppingBasket} className={styles.icon}></FontAwesomeIcon>
    </Button>
  );
};

CartButton.propTypes = {
  children: PropTypes.node,
  addToCart: PropTypes.func,
  item: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default connect(null, { addToCart }) (CartButton);
