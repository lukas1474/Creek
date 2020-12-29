import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cart.module.scss';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';


class Cart extends React.Component {

  handleClick = () => {
    this.props.removeFromCart();
  }

  render() {

    const { cart } = this.props;
    console.warn('Props', this.props);

    const TotalPrice = cart.reduce((a, b) => a + (b.price || 0), 0);

    if (cart.length > 0) {
      return (
        <div className={styles.root}>
          <div>
            <h2>Masz {cart.length} produktów w koszyku</h2>
          </div>
          {cart && cart.map(item => (
            <Col xs={12} md={6} lg={4} key={item._id} className={styles.mainCol} >
              <Col className={styles.colLeft}>
                <img src={item.image} alt='zdjęcie ubrania' className={styles.img} />
              </Col>
              {console.log(cart)}
              <Col className={styles.colRight}>
                <h2 className={styles.name}>{item.name}</h2>
                <p>{item.price}</p>
                <Row className={styles.buttonLine}>
                  <Button variant="danger" title="Usuń z koszyka"
                    className={styles.removeButton}
                    onClick={() => { this.props.removeFromCart();}}
                  >
                    <FontAwesomeIcon icon={faWindowClose} className={styles.icon}></FontAwesomeIcon>
                  </Button>
                  {/* {console.log(addToCart)} */}
                </Row>
              </Col>
            </Col>
          ))}
          {cart.length !== 0 && (
            <div className={styles.cart}>
              <div className={styles.total}>
                <div>
                  Razem:{' '}
                  {TotalPrice}
                </div>
                <Button variant="secondary">Zamówienie</Button>
              </div>
            </div>
          )}

        </div>
      );
    } else {
      return <h2>koszyk jest pusty</h2>;
    }
  }
}

Cart.propTypes = {
  children: PropTypes.node,
  removeFromCart: PropTypes.func,
  cart: PropTypes.arrayOf({
    name: PropTypes.string,
    information: PropTypes.string,
    price: PropTypes.number,
    numbers: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string,
    sex: PropTypes.string,
  }),
};

Cart.defaultProps = {
  cart: [],
};

export default Cart;
