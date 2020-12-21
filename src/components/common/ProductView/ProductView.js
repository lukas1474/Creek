import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductView.module.scss';

import { Row, Col } from 'react-bootstrap';
import CartButton from '../CartButton/CartButton';

const ProductView = (item) => {
  return (
    <Col xs={12} md={6} lg={4} key={item.id} className={styles.mainCol} >
      <Col className={styles.colLeft}>
        <img src={item.image} alt='zdjęcie ubrania' className={styles.img} />
      </Col>
      <Col className={styles.colRight}>
        <h2 className={styles.name}>{item.name}</h2>
        <p>{item.sex}</p>
        <p>{item.price}</p>
        <p>{item.information}</p>
        <Row className={styles.buttonLine}>
          <CartButton />
        </Row>
      </Col>
    </Col>
  );
};

ProductView.propTypes = {
  children: PropTypes.node,
  item: PropTypes.string,
};

export default ProductView;
