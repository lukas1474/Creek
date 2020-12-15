import React from 'react';
import PropTypes from 'prop-types';

import styles from './AboutUs.module.scss';

const AboutUs = () => (
  <div className={styles.root}>
    <p>O nas</p>
  </div>
);

AboutUs.propTypes = {
  children: PropTypes.node,
};

export default AboutUs;
