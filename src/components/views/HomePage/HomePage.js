/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../../../../src/config';

import styles from './HomePage.module.scss';

import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

class HomePage extends React.Component {

  componentDidMount() {
    fetch(`${API_URL}/subpages`)
      .then(results => {
        return results.json();
      }).then(results => {
        const { apiSubpages } = this.props;
        console.log(apiSubpages);
        apiSubpages(results);
      });
  }

  render() {

    const { subpages } = this.props;
    console.log(subpages);
    return (
      <div className={styles.root}>
        <Container>
          <Row xs={1} md={1} lg={2}>
            {subpages.data && subpages.data.map(item => (

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
  apiSubpages: PropTypes.func,
  subpages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default HomePage;
