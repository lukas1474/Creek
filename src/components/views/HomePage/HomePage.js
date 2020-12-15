import React from 'react';
import PropTypes from 'prop-types';

import styles from './HomePage.module.scss';

import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Link to={`/oNas/`} className={styles.link}>
          <div>
            <h2>Ekipa</h2>
          </div>
        </Link>
        <Link to={`/ubrania/`} className={styles.link}>
          <div>
            <h2>Ubrania</h2>
          </div>
        </Link>
        <Link to={`/sprzęt/`} className={styles.link}>
          <div>
            <h2>Sprzęt biwakowy</h2>
          </div>
        </Link>
        <Link to={`/akcesoria/`} className={styles.link}>
          <div>
            <h2>Akcesoria</h2>
          </div>
        </Link>
        <Link to={`/kontakt/`} className={styles.link}>
          <div>
            <h2>Kontakt</h2>
          </div>
        </Link>
      </div >
    );
  }
}

HomePage.propTypes = {
  children: PropTypes.node,
};

export default HomePage;
