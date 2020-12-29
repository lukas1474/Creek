import React from 'react';
import PropTypes from 'prop-types';

import styles from './HomePage.module.scss';
import { API_URL } from '../../../../src/config';

import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

class HomePage extends React.Component {

  componentDidMount() {
    fetch(`${API_URL}/subpages`)
      .then(results => {
        return results.json();
      }).then(results => {
        const { apiSubpages } = this.props;
        apiSubpages(results);
      });
  }

  render() {

    const { subpages } = this.props;

    return (
      <div className={styles.root}>
        <Container>
          <Row xs={1} md={1} lg={2}>
            { subpages.data && subpages.data.map(subpage => (
              <Row className={styles.viewSubpages} key={subpage._id}>
                <Link to={`/${subpage.name}`} className={styles.link}>
                  <Col>
                    <Col className={styles.colImg}>
                      <img
                        className={styles.viewSubpagesImg}
                        src={subpage.image}
                        width={350}
                        height={250}
                        alt='subpagesImg'
                      />
                    </Col>
                    <Col className={styles.viewSubpagesText}>
                      <div>
                        <h2>{subpage.name}</h2>
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
  subpages: PropTypes.shape({
    data: PropTypes.arrayOf({
      name: PropTypes.string,
      image: PropTypes.string,
    }),
  }),
};

export default HomePage;
