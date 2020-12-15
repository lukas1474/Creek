import React from 'react';
import PropTypes from 'prop-types';

import styles from './Clothes.module.scss';

const Clothes = () => (
  <div className={styles.root}>
    <p>Ubrania</p>
  </div>
);

Clothes.propTypes = {
  children: PropTypes.node,
};

export default Clothes;
