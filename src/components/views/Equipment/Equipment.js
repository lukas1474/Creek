import React from 'react';
import PropTypes from 'prop-types';

import styles from './Equipment.module.scss';

import { Row } from 'react-bootstrap';
import ProductView from '../../common/ProductView/ProductView';

class Equipment extends React.Component {
  render() {

    const { equipment } = this.props;

    return (
      <div className={styles.root}>
        <Row className={styles.viewEquipment}>
          {equipment && equipment.map(item => (
            <ProductView key={item} {...item} />
          ))}
        </Row>
      </div >
    );
  }
}

Equipment.propTypes = {
  children: PropTypes.node,
  equipment: PropTypes.array,
};

export default Equipment;
