import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.scss';

const Contact = () => (
  <div className={styles.root}>
    <p>Kontakt</p>
  </div>
);

Contact.propTypes = {
  children: PropTypes.node,
};

export default Contact;
