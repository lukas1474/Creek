import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductsPage.module.scss';

import { Row, Col, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
// import CartButton from '../../common/CartButton/CartButton';
import { connect } from 'react-redux';
// import { addToCart } from '../../../redux/cartRedux';

class ProductPage extends React.Component {
  render() {

    const { product, name } = this.props;
    // console.log(item);

    return (
      <Col xs={12} md={6} lg={4} className={styles.mainCol} >
        <Col className={styles.colLeft}>
          {/* <img src={image} alt='zdjęcie ubrania' className={styles.img} /> */}
        </Col>
        <Col className={styles.colRight}>
          <h2 className={styles.name}>{name}</h2>
          {/* <p>{sex}</p>
          <p>{price}</p>
          <p>{information}</p> */}
          <Row className={styles.buttonLine}>
            {/* <CartButton {...item} /> */}
          </Row>
          {/* <Button variant="secondary" title="Add to Cart" onClick={() => this.props.addToCart('ubrania')} className={styles.cartButton} >
            <FontAwesomeIcon icon={faShoppingBasket} className={styles.icon}></FontAwesomeIcon>
          </Button> */}
        </Col>
      </Col>
    );
  }
}

ProductPage.propTypes = {
  product: PropTypes.array,
  children: PropTypes.node,
  _id: PropTypes.node,
  item: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  sex: PropTypes.string,
  price: PropTypes.string,
  information: PropTypes.string,
  addToCart: PropTypes.func,
};

export default ProductPage;
