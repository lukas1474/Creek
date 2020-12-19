import React from 'react';
import PropTypes from 'prop-types';

import styles from './HomePage.module.scss';

import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

class HomePage extends React.Component {
  render() {

    const { subpages } = this.props;

    return (
      <div className={styles.root}>
        <Container>
          <Row xs={1} md={1} lg={2}>
            {subpages && subpages.map(item => (
              <Row className={styles.viewSubpages} key={item.id}>
                <Link to={`/${item.id}`} className={styles.link}>
                  <Col>
                    <Col className={styles.colImg}>
                      <img
                        className={styles.viewSubpagesImg}
                        src={item.image}
                        width={350}
                        height={250}
                        alt='subpagesImg'
                      />
                    </Col>
                    <Col className={styles.viewSubpagesText}>
                      <div>
                        <h2>{item.name}</h2>
                      </div>
                    </Col>
                  </Col>
                </Link>
              </Row>
            ))}
          </Row>
        </Container>
      </div >
    );
  }
}

HomePage.propTypes = {
  children: PropTypes.node,
  subpages: PropTypes.array,
  id: PropTypes.string,
};

export default HomePage;
