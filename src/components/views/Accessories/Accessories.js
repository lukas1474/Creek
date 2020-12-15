import React from 'react';
import PropTypes from 'prop-types';

import styles from './Accessories.module.scss';

const Accessories = () => (
  <div className={styles.root}>
    <p>Akcesoria</p>
  </div>
);

Accessories.propTypes = {
  children: PropTypes.node,
};

export default Accessories;
