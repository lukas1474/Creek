import React from 'react';
import PropTypes from 'prop-types';

import styles from './Clothes.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

class Clothes extends React.Component {
  render() {

    const {clothes} = this.props;

    return (
      <div className={styles.root}>
        <Container>
          <Row>
            {clothes && clothes.map(item => (
              <Col xs={6} md={4} lg={3} key={item.id} >
                {console.log(clothes)}
                <h2>{item.name}</h2>
                <p>{item.płeć}</p>
                <p>{item.price}</p>
              </Col>
            ))}
          </Row>
        </Container>
        <p>Ubrania</p>
      </div >
    );
  }
}

Clothes.propTypes = {
  children: PropTypes.node,
  clothes: PropTypes.array,
};

export default Clothes;
