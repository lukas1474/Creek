import React from 'react';
import PropTypes from 'prop-types';

import styles from './HomePage.module.scss';

import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Container >
          <Row xs={1} md={1} lg={2}>
            <Link to={`/ubrania/`} className={styles.link}>
              <Row className={styles.viewSubpages}>
                <Col className={styles.colImg}>
                  <img
                    className={styles.viewSubpagesImg}
                    width={350}
                    height={250}
                    alt='subpagesImg' />
                </Col>
                <Col className={styles.viewSubpagesText}>
                  <div >
                    <h2>Ubrania</h2>
                  </div>
                </Col>
              </Row>
            </Link>
            <Link to={`/sprzęt/`} className={styles.link}>
              <Row className={styles.viewSubpages}>
                <Col className={styles.colImg}>
                  <img
                    className={styles.viewSubpagesImg}
                    width={350}
                    height={250}
                    alt='subpagesImg' />
                </Col>
                <Col className={styles.viewSubpagesText}>
                  <div>
                    <h2>Biwak</h2>
                  </div>
                </Col>
              </Row>
            </Link>
            <Link to={`/akcesoria/`} className={styles.link}>
              <Row className={styles.viewSubpages}>
                <Col className={styles.colImg}>
                  <img
                    className={styles.viewSubpagesImg}
                    width={350}
                    height={250}
                    alt='subpagesImg' />
                </Col>
                <Col className={styles.viewSubpagesText}>
                  <div>
                    <h2>Akcesoria</h2>
                  </div>
                </Col>
              </Row>
            </Link>
            <Link to={`/oNas/`} className={styles.link}>
              <Row className={styles.viewSubpages}>
                <Col className={styles.colImg}>
                  <img
                    className={styles.viewSubpagesImg}
                    width={350}
                    height={250}
                    alt='subpagesImg' />
                </Col>
                <Col className={styles.viewSubpagesText}>
                  <div>
                    <h2>Nasza drużyna</h2>
                  </div>
                </Col>
              </Row>
            </Link>
            <Link to={`/kontakt/`} className={styles.link}>
              <Row className={styles.viewSubpages}>
                <Col className={styles.colImg}>
                  <img
                    className={styles.viewSubpagesImg}
                    width={350}
                    height={250}
                    alt='subpagesImg' />
                </Col>
                <Col className={styles.viewSubpagesText}>
                  <div>
                    <h2>Kontakt</h2>
                  </div>
                </Col>
              </Row>
            </Link>
          </Row>
        </Container>
      </div>
    );
  }
}

HomePage.propTypes = {
  children: PropTypes.node,
};

export default HomePage;
