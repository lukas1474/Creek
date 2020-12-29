import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductView.module.scss';

import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

class ProductView extends React.Component {

  handleClick = (name, image, price, _id) => {
    this.props.addToCart(name, image, price, _id);
  }

  // addToCart = (products) => {
  //   const cart = this.state.cart.slice();
  //   let alreadyInCart = false;
  //   cart.forEach((item) => {
  //     if (item._id === products.data._id) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cart.push({ ...products, count: 1 });
  //   }
  // };

  render() {

    const { _id, image, name, sex, price, information, addToCart, products } = this.props;

    return (
      <Col xs={12} md={6} lg={4} key={_id} className={styles.mainCol} >
        <Col className={styles.colLeft}>
          <img src={image} alt='zdjęcie ubrania' className={styles.img} />
        </Col>
        <Col className={styles.colRight}>
          {/* <Link to={`/products/${_id}`} className={styles.link}> */}
          <h2 className={styles.name}>{name}</h2>
          {/* {props => <ProductsPage {...props} key={this.props._id } />} */}
          {/* </Link> */}
          <p>{sex}</p>
          <p>{price}</p>
          <p>{information}</p>
          <Row className={styles.buttonLine}>
            <Button
              variant="secondary"
              title="Dodaj do koszyka"
              onClick={() => { this.props.addToCart(name, image, price, _id);}}
              className={styles.cartButton}
            >
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className={styles.icon}
              >
              </FontAwesomeIcon>
            </Button>
            {console.log(addToCart)}

          </Row>
        </Col>
      </Col>
    );
  }
}

ProductView.propTypes = {
  products: PropTypes.any,
  children: PropTypes.node,
  _id: PropTypes.node,
  item: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  sex: PropTypes.string,
  price: PropTypes.number,
  information: PropTypes.string,
  addToCart: PropTypes.func,
};

export default ProductView;
