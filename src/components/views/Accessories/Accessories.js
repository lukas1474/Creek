import React from 'react';
import PropTypes from 'prop-types';

import styles from './Accessories.module.scss';

import { Row } from 'react-bootstrap';
import ProductView from '../../common/ProductView/ProductView';

class Accessories extends React.Component {
  render() {

    const { accessories } = this.props;

    return (
      <div className={styles.root}>
        <Row className={styles.viewAccessories}>
          {accessories && accessories.map(item => (
            <ProductView key={item} {...item} />
          ))}
        </Row>
      </div >
    );
  }
}

Accessories.propTypes = {
  children: PropTypes.node,
  accessories: PropTypes.array,
};

export default Accessories;
