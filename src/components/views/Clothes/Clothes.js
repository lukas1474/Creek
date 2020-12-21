import React from 'react';
import PropTypes from 'prop-types';

import styles from './Clothes.module.scss';

import { Row } from 'react-bootstrap';
import ProductView from '../../common/ProductView/ProductView';

class Clothes extends React.Component {
  render() {

    const { clothes } = this.props;

    return (
      <div className={styles.root}>
        <Row className={styles.viewClothes}>
          {clothes && clothes.map(item => (
            <ProductView key={item} {...item} />
          ))}
        </Row>
      </div >
    );
  }
}

Clothes.propTypes = {
  children: PropTypes.node,
  clothes: PropTypes.array,
};

export default Clothes;
