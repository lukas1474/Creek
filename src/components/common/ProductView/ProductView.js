import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductView.module.scss';

import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

class ProductView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
      totalPrice: this.props.price,
    };
  }

  handleClick = (name, image, totalPrice, price, _id, qty) => {
    this.setState({
      totalPrice: this.state.qty * price,
    });
    this.props.addToCart(name, image, totalPrice, _id, qty);
    this.setState({
      qty: 1,
    });
  }

  decrease = () => {
    if (this.state.qty > 1) {
      console.log('decrease', this.state.qty);
      this.setState({
        qty: this.state.qty - 1,
      });
    }
  };

  increase = () => {
    this.setState({
      qty: this.state.qty + 1,
    });
  };


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

    const { _id, image, name, sex, price, information } = this.props;
    let qty = this.state.qty;
    let totalPrice = price * qty;

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
              onClick={() => this.handleClick(name, image, totalPrice, price, _id, qty)}
              className={styles.cartButton}
            >
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className={styles.icon}
              >
              </FontAwesomeIcon>
            </Button>
            {console.log(this.props.addToCart)}
            <Row>
              <Button variant="primary"
                onClick={() => {
                  this.decrease();
                }}
              >
                -
              </Button>
              <p>{this.state.qty}</p>
              <Button variant="primary"
                onClick={() => {
                  this.increase();
                }}
              >
                +
              </Button>
            </Row>
          </Row>
        </Col>
      </Col>
    );
  }
}

ProductView.propTypes = {
  qty: PropTypes.any,
  decrease: PropTypes.func,
  increase: PropTypes.func,
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
