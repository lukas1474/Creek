import React from 'react';
import PropTypes from 'prop-types';

import styles from './Equipment.module.scss';

const Equipment = () => (
  <div className={styles.root}>
    <p>Sprzęt biwakowy</p>
  </div>
);

Equipment.propTypes = {
  children: PropTypes.node,
};

export default Equipment;
