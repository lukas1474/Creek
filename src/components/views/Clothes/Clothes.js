import React from 'react';
import PropTypes from 'prop-types';

import styles from './Clothes.module.scss';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class Clothes extends React.Component {
  render() {

    const { clothes } = this.props;

    return (
      <div className={styles.root}>
        <Row className={styles.viewClothes}>
          {clothes && clothes.map(item => (
            <Col xs={12} md={6} lg={4} key={item.id} className={styles.asda} >
              {console.log(clothes)}
              <Col className={styles.colImg}>
                <img src={item.image} alt='zdjęcie ubrania' className={styles.img} />
              </Col>
              <Col className={styles.clothesText}>
                <h2 className={styles.name}>{item.name}</h2>
                <p>{item.sex}</p>
                <p>{item.price}</p>
                <Row className={styles.overlayRight}>
                  <Button variant="secondary" title="Add to Cart">
                    <FontAwesomeIcon icon={faShoppingBasket} className={styles.icon}></FontAwesomeIcon>
                  </Button>
                  <Button variant="secondary" title="Add to Wishlist">
                    <FontAwesomeIcon icon={faHeart} className={styles.icon}></FontAwesomeIcon>
                  </Button>
                  <Button variant="secondary" title="Quick Shop">
                    <FontAwesomeIcon icon={faEye} className={styles.icon}></FontAwesomeIcon>
                  </Button>
                </Row>
              </Col>
            </Col>
          ))}
        </Row>
        <p>Ubrania</p>
      </div >
    );
  }
}

Clothes.propTypes = {
  children: PropTypes.node,
  clothes: PropTypes.array,
};

export default Clothes;
